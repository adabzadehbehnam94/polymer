"use server"

import { cookies } from "next/headers"
import { productsType } from "../(admin)/dashboard/products/page"
import { prisma } from "@/lib/prisma"
import cloudinary from "@/lib/cloudinary"
import { resolve } from "path"
import { rejects } from "assert"
import { error, log } from "console"
import bcrypt from "bcrypt"
import { url } from "inspector"

interface State {
    name?: string,
    family?: string,
    email?: string,
    password?: string,
    success?: string | undefined,
    error?: string | undefined
}

interface StateProduct {
    producName: string,
    price: string,
    detail: string,
    id?: string
}

interface StateSetting {
    webName?: string | undefined,
    logo?: string,
    detail?: string,
    id?: number
    success?: string,
    error?: string,
    address?: string,
    mobile?: number,
    email?: string,
    errName?: string,
    errLogo?: string,
    errAddress?: string,
    errMobile?: string,
}

interface SliderState {
    errtitle: string,
    errBackground?: string,
    error: string,
    success: string
}

interface ArticleState {
    errtitle: string,
    errcontent: string,
    errimage: string,
    success: string,
    error: string
}

interface Data {
    firstName: string,
    lastName?: string,
    email?: string,
    password: string | number
}



interface Formdata {
    get: (item: string) => any
}

interface PromisEditSetting {
    success?: string,
    error?: string,
    logoErr?: string,
    errMobile?: string
    webNameErr?: string
}

interface MessageState {
    errName?: string,
    errPhone?: string,
    errMessage?: string,
    success?: string,
    error?: string,
}

export async function registerAction(state: State, formdata: Formdata): Promise<any> {
    const name = formdata.get("name")
    const mobile = formdata.get("mobile")
    const email = formdata.get("email")
    const address = formdata.get("address")

    if (name === "") {
        return {
            nameErr: "فیلد نام اجباریست"
        }
    }
    if (mobile === "") {
        return {
            mobileErr: "فیلد شماره موبایل اجباریست"
        }
    }



    const data = await prisma.customers.create({
        data: {
            name: name,
            mobile: mobile,
            email: email,
            address: address
        },
    });


    if (data) {
        return {
            success: "ثبت مشتری با موفقیت انجام شد"
        }
    } else {
        return {
            error: "ثبت نام انجام نشد"
        }
    }

}

export async function login(state: State, formdata: Formdata): Promise<any> {
    const username = formdata.get("username")
    const password = formdata.get("password")

    if (username === "") {
        return {
            userErr: "فیلد نام کاربری اجباریست"
        }
    }
    if (password === "") {
        return {
            passwordErr: "فیلد رمز عبور اجباریست"
        }
    }


    const fetchdata = await prisma.users.findUnique({ where: { id: 1 } })


    if (fetchdata?.username === username) {

        // const matcher = fetchdata.find((item: Data) => item.email === email)
        const hashedPassword = await bcrypt.compare(password, fetchdata!.password)
        if (hashedPassword) {

            const cookie: any = await cookies()
            cookie.set({
                name: "session",
                value: String(fetchdata?.id),
                httpOnly: true
            })


            return {
                user: fetchdata?.firstname,
                id: fetchdata?.id,
                logSuccess: `خوش آمدید ${fetchdata?.firstname}`
            }

        } else {
            return {
                logError: "رمز عبور اشتباه است"
            }
        }

    } else {
        return {
            error: "نام کاربری  اشتباه است"
        }
    }
}

export const presentUser = async (): Promise<{ user?: string, cookieError?: string, id?: string, name?: string }> => {
    const cookie = await cookies()
    const name = cookie.get("name")

    const user: any = cookie.get("user")


    if (name) {
        return {
            user: name.value,

            id: user.value
        }
    } else {
        return {
            cookieError: "لطفا وارد شوید یا ثبت نام کنید"
        }
    }
}

export const logoutUser = async () => {
    const cookie = await cookies()
    cookie.delete("session")

}


export async function productAction(state: productsType, formdata: Formdata): Promise<any> {
    const productName = formdata.get("productName")
    const price = formdata.get("price")
    const image = formdata.get("image") as File
    const video = formdata.get("video") as File
    const categoryId = formdata.get("categoryId")
    const details = formdata.get("details")
    const brand = formdata.get("brand")
    const application = formdata.get("application")
    let videoUrl
    let videoPublicId

    if (productName === "") {
        return {
            nameErr: "فیلد نام اجباریست"
        }
    }
    if (price === 0) {
        return {
            priceErr: "فیلد قیمت اجباریست"
        }
    }

    if (image === null) {
        return {
            imageErr: "تصویر محصول اضافه نشده"
        }
    }

    const bytes = await image.arrayBuffer()
    const buffer = Buffer.from(bytes)

    const uploadImage: any =
        await new Promise(
            (resolve, reject) => {

                const stream =
                    cloudinary.uploader.upload_stream(
                        {
                            folder:
                                "products",
                        },

                        (error, result) => {

                            if (error)
                                reject(error);

                            else
                                resolve(result);
                        }
                    );

                stream.end(buffer);
            }
        );

    if (video instanceof File && video.size > 0) {

        const bytesVideo = await video.arrayBuffer()
        const bufferVideo = Buffer.from(bytesVideo)

        const uploadVideo: any =
            await new Promise(
                (resolve, reject) => {

                    const stream =
                        cloudinary.uploader.upload_stream(
                            {
                                folder: "products",

                                resource_type: "video"
                            },

                            (error, result) => {

                                if (error)
                                    reject(error);

                                else
                                    resolve(result);
                            }
                        );

                    stream.end(bufferVideo);
                }
            );

        videoUrl = uploadVideo.secure_url
        videoPublicId = uploadVideo.public_id
    } else {
        videoUrl = null
        videoPublicId = null
    }



    const result = await prisma.products.create({
        data: {
            productName: productName,
            price: price,
            details: details,
            categoryId: Number(categoryId),
            image: uploadImage.secure_url,
            imagePublicId: uploadImage.public_id,
            video: videoUrl,
            videoPublicId: videoPublicId,
            brand: brand,
            application: application

        },
    });


    if (result) {
        return {
            success: " محصول  با موفقیت ثبت شد"
        }
    } else {
        return {
            error: "ثبت محصول انجام نشد"
        }
    }
}

export const removeUser = async (id: number | undefined) => {
    const data = await prisma.customers.delete({ where: { id: id } })
}

export async function editUser(state: State, formdata: Formdata): Promise<any> {
    const name = formdata.get("name")
    const mobile = formdata.get("mobile")
    const email = formdata.get("email")
    const address = formdata.get("address")
    const id = formdata.get("id")


    if (name === "") {
        return {
            nameErr: "فیلد نام نباید خالی باشد"
        }
    }
    if (mobile === null) {
        return {
            mobileErr: "فیلد شماره موبایل نباید خالی باشد"
        }
    }


    const result = await prisma.customers.update({
        where: { id: Number(id) },
        data: {
            name: name,
            mobile: mobile,
            email: email,
            address: address
        }
    })

    if (result) {
        return {
            editSuccess: "تغییرات با موفقیت اعمال شد"
        }
    } else {
        return {
            editError: "تغییرات انجام نشد"
        }
    }
}

export async function editProfile(state: State, formdata: Formdata): Promise<any> {
    const username = formdata.get("username")
    const firstname = formdata.get("firstname")
    const lastname = formdata.get("lastname")
    const email = formdata.get("email")
    const password = formdata.get("password")


    if (typeof (username) !== "string" || username.trim() === "") {
        return {
            usernameErr: " نام کاربری نباید خالی باشد"
        }
    }

    if (typeof (firstname) !== "string" || firstname.trim() === "") {
        return {
            firstnameErr: "فیلد نام  نباید خالی باشد"
        }
    }

    if (typeof (lastname) !== "string" || lastname.trim() === "") {
        return {
            lastnameErr: "فیلد نام خانوادگی نباید خالی باشد"
        }
    }
    if (typeof (password) !== "string" || password.trim() === "") {
        return {
            passwordErr: "رمز عبور نباید خالی باشد"
        }
    }


    const result = await prisma.users.update({
        where: { id: 1 },
        data: {
            username: username,
            firstname: firstname,
            lastname: lastname,
            email: email,
            password: password
        }
    })

    if (result) {
        return {
            editSuccess: "تغییرات با موفقیت اعمال شد"
        }
    } else {
        return {
            editError: "تغییرات انجام نشد"
        }
    }
}



export async function editProduct(state: StateProduct, formdata: Formdata): Promise<any> {
    const productName = formdata.get("producName")
    const price = formdata.get("price")
    const details = formdata.get("details")
    const id = Number(formdata.get("id"))
    const categoryId = Number(formdata.get("category"))
    const image = formdata.get("image")
    const video = formdata.get("video")
    const application = formdata.get("application")
    const brand = formdata.get("brand")
    let imageUrl
    let imagePublicId
    let videoUrl
    let videoPublicId

    const product = await prisma.products.findUnique({ where: { id: id } })

    if (productName === "") {
        return {
            nameErr: "فیلد نام محصول نباید خالی باشد"
        }
    }
    if (price === 0) {
        return {
            priceErr: "فیلد قیمت نباید خالی یا صفر باشد"
        }
    }





    if (image instanceof File && image.size > 0) {



        if (product?.imagePublicId) {
            await cloudinary.uploader.destroy(product.imagePublicId)
        }

        const byte = await image.arrayBuffer()
        const buffer = Buffer.from(byte)
        const uploadImage: any = await new Promise(
            (resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    { folder: "product" },
                    (error, result) => {
                        if (error) reject(error)
                        else resolve(result)
                    }
                )

                stream.end(buffer)
            }
        )

        imageUrl = uploadImage.secure_url
        imagePublicId = uploadImage.public_id
    } else {
        imageUrl = formdata.get("oldImage")
        imagePublicId = formdata.get("oldImagePublicId")
    }

    if (video instanceof File && video.size > 0) {

        if (product?.videoPublicId) {
            await cloudinary.uploader.destroy(product.videoPublicId)
        }

        const byte = await video.arrayBuffer()
        const buffer = Buffer.from(byte)
        const uploadVideo: any = await new Promise(
            (resolve, reject) => {
                const stream = cloudinary.uploader.upload_stream(
                    {
                        folder: "product",
                        resource_type: "video"
                    },
                    (error, result) => {
                        if (error) reject(error)
                        else resolve(result)
                    }
                )

                stream.end(buffer)
            }
        )

        videoUrl = uploadVideo.secure_url
        videoPublicId = uploadVideo.public_id
    } else {
        videoUrl = formdata.get("oldVideo")
        videoPublicId = formdata.get("oldVideoPublicId")
    }

    const fetchData = await prisma.products.update({
        where: { id: id },
        data: {
            productName: productName,
            price: price,
            details: details,
            categoryId: categoryId,
            image: imageUrl,
            imagePublicId: imagePublicId,
            video: videoUrl,
            videoPublicId: videoPublicId,
            application: application,
            brand: brand
        }
    })


    if (fetchData) {
        return {
            success: "ویرایش با موفقیت انجام شد"
        }
    } else {
        return {
            error: "ویرایش انجام نشد"
        }
    }
}

export async function removeProduct(id: number | undefined) {
    const product = await prisma.products.findUnique({ where: { id: id } })

    if (product?.imagePublicId) {
        await cloudinary.uploader.destroy(product.imagePublicId)
    }

    if (product?.videoPublicId) {
        await cloudinary.uploader.destroy(product.videoPublicId)
    }
    const fetchdata = await prisma.products.delete({ where: { id: id } })

    if (fetchdata) {
        return {
            success: "محصول با موفقیت حذف شد"
        }
    } else {
        return {
            error: "محصول حذف نشد"
        }
    }

}

export async function allUsers() {
    const data = await prisma.users.findMany()
    return data.length
}

export async function allProducts() {
    const data = await prisma.products.findMany()
    return data.length
}

export async function allCategories(count?: number) {
    const data = await prisma.categories.findMany({ take: count })
    return data
}

export async function allCustomers() {
    const data = await prisma.customers.findMany()
    return data
}

export async function allSliderAds(count?: number) {
    const data = await prisma.sliderAds.findMany({ take: count })
    return data
}

export async function allArticles(count?: number) {
    const data = await prisma.articles.findMany({ take: count })
    return data
}


export async function categoryAction(state: any, formdata: any): Promise<any> {
    const name = formdata.get("name")
    const application = formdata.get("application")
    const image = formdata.get("image")
    let urlImage
    let urlPublicId


    if (name === "") {
        return {
            nameErr: "نام دسته بندی نباید خالی باشد"
        }
    }

    if (image instanceof File && image.size > 0) {
        const byte = await image.arrayBuffer()
        const buffer = Buffer.from(byte)

        const uploudImage: any = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "categories" },
                (error, result) => {
                    if (error) reject(error)
                    else resolve(result)
                }
            )

            stream.end(buffer)
        })

        urlImage = uploudImage.secure_url
        urlPublicId = uploudImage.public_id
    } else {
        urlImage = null
        urlPublicId = null
    }

    const data = await prisma.categories.create({
        data: {
            name: name,
            application: application,
            image: urlImage,
            imagePublicId: urlPublicId
        }
    })

    if (data) {
        return {
            success: "دسته بندی جدید با موفقیت ایجاد شد"
        }
    } else {
        return {
            error: "دسته ایجاد نشد"
        }
    }
}

export async function categoryEditAction(state: any, formdata: any): Promise<any> {
    const name = formdata.get("name")
    const id = formdata.get("id")
    const application = formdata.get("application")
    const image = formdata.get("image")
    let urlImage
    let urlPublicId


    if (name === "") {
        return {
            nameErr: "نام دسته بندی نباید خالی باشد"
        }
    }

    if (image instanceof File && image.size > 0) {

        const category = await prisma.categories.findUnique({ where: { id: id } })

        if (category?.imagePublicId) {
            await cloudinary.uploader.destroy(category.imagePublicId)
        }

        const byte = await image.arrayBuffer()
        const buffer = Buffer.from(byte)

        const uploadImage: any = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "categories" },
                (error, result) => {
                    if (error) reject(error)
                    else resolve(result)
                }
            )

            stream.end(buffer)
        })

        urlImage = uploadImage.secure_url
        urlPublicId = uploadImage.public_id
    } else {
        urlImage = formdata.get("oldImage")
        urlPublicId = formdata.get("oldImagePublicId")
    }

    const data = await prisma.categories.update({
        where: { id: Number(id) },
        data: {
            name: name,
            application: application,
            image: urlImage,
            imagePublicId: urlPublicId
        }
    })

    if (data) {
        return {
            success: "ویرایش با موفقیت ثبت شد"
        }
    } else {
        return {
            error: "ویرایش انجام نشد"
        }
    }
}

export async function categoryDeleteAction(id: number) {

    const category = await prisma.categories.findUnique({ where: { id: id } })

    if (category?.imagePublicId) {
        await cloudinary.uploader.destroy(category.imagePublicId)
    }

    const data = await prisma.categories.delete({
        where: { id: Number(id) }
    })
}

export async function importWebDetail(state: StateSetting, formdata: Formdata) {
    const name = formdata.get("name")
    const detail = formdata.get("detail")
    const logo = formdata.get("logo")
    const address = formdata.get("address")
    const phone = formdata.get("phone")
    const email = formdata.get("email")

    if (name === "") {
        return {
            ...state,
            errName: "نام شرکت نباید خالی باشد"
        }
    }
    if (logo === null) {
        return {
            ...state,
            errLogo: "لطفا لوگو شرکت را وارد کنید",
        }
    }
    if (address === "") {
        return {
            ...state,
            errAddress: "فیلد آدرس نباید خالی باشد",
        }
    }

    if (phone === null) {
        return {
            ...state,
            errMobile: "فیلد شماره موبایل نباید خالی باشد"
        }
    }



    const byte = await logo.arrayBuffer()
    const buffer = Buffer.from(byte)

    const uploadLogo: any = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: "logo" },
            (error, result) => {
                if (error) reject(error)
                else resolve(result)
            }
        )
        stream.end(buffer)
    })


    const cookie = await cookies()
    const userId = cookie.get("user")?.value


    const dataSetting = await prisma.setting.create({
        data: {
            name: name,
            detail: detail,
            logo: uploadLogo.secure_url,
            logoPublicId: uploadLogo.public_id,
            email: email,
            address: address,
            phone: phone
        }
    })

    if (dataSetting) {
        return {
            ...state,
            success: "اطلاعت سایت با موفقیت ثبت شد"
        }
    } else {
        return {
            ...state,
            error: "ثبت اطلاعات انجام نشد"
        }
    }

}

export async function editWebSetting(state: StateSetting, formdata: Formdata): Promise<PromisEditSetting> {
    const logo = formdata.get("logo")
    const name = formdata.get("name")
    const detail = formdata.get("detail")
    const address = formdata.get("address")
    const phone = formdata.get("phone")
    const email = formdata.get("email")
    const workingHours = formdata.get("workingHours")

    if (logo === null) {
        return {
            logoErr: "لوگو نباید خالی باشد"
        }
    }

    if (typeof name !== "string" || name.trim() === "") {
        return {
            webNameErr: "نام شرکت نباید خالی باشد"
        }
    }

    if (phone === null) {
        return {
            errMobile: "فیلد شماره موبایل نباید خالی باشد"
        }
    }

    let logoUrl
    let logoPublicId

    if (logo instanceof File && logo.size > 0) {

        const logoSetting = await prisma.setting.findUnique({ where: { id: 1 } })
        if (logoSetting?.logoPublicId) {
            await cloudinary.uploader.destroy(logoSetting.logoPublicId)
        }

        const bytes = await logo.arrayBuffer()
        const buffer = Buffer.from(bytes)

        const uploadImage: any = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "logo" },
                (error, result) => {
                    if (error) reject(error)
                    else resolve(result)
                }
            )

            stream.end(buffer)

        })

        logoUrl = uploadImage.secure_url
        logoPublicId = uploadImage.public_id
    } else {
        logoUrl = formdata.get("oldLogo")
        logoPublicId = formdata.get("oldLogoPublicId")
    }


    const data = await prisma.setting.update({
        where: { id: 1 },
        data: {
            logo: logoUrl,
            logoPublicId: logoPublicId,
            name: name,
            detail: detail,
            phone: phone,
            email: email,
            address: address,
            workingHours: workingHours
        }
    })

    if (data) {
        return {
            success: "ویرایش با موفقیت ثبت شد"
        }
    } else {
        return {
            error: "ویرایش انجام نشد"
        }
    }
}

export async function presentSetting() {
    const data = await prisma.setting.findUnique({ where: { id: 1 } })
    return data
}


export async function adsAction(state: SliderState, formdata: Formdata) {
    const title = formdata.get("title")
    const subtitle = formdata.get("subtitle")
    const background = formdata.get("background")
    const logo = formdata.get("logo")
    let urlLogo
    let urlLogoPublicId


    if (typeof title !== "string" || title.trim() === "") {
        return {
            ...state,
            errtitle: "فیلد تیتر نباید خالی باشد"
        }
    }

    if (!(background instanceof File) || background.size === 0) {
        return {
            ...state,
            errBackground: "فیلد تصویر تبلیغ نباید خالی باشد"
        }
    }
    const byte = await background.arrayBuffer()
    const buffer = Buffer.from(byte)

    const uploadBackground: any = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: "background" },
            (error, result) => {
                if (error) reject(error)
                else resolve(result)
            }

        )

        stream.end(buffer)
    })



    if (logo instanceof File && logo.size > 0) {

        const byte = await logo.arrayBuffer()
        const buffer = Buffer.from(byte)

        const uploadLogo: any = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "logoSlider" },
                (error, result) => {
                    if (error) reject(error)
                    else resolve(result)
                }
            )

            stream.end(buffer)
        })

        urlLogo = uploadLogo.secure_url
        urlLogoPublicId = uploadLogo.public_id
    } else {
        urlLogo = null
        urlLogoPublicId = null
    }

    const data = await prisma.sliderAds.create({
        data: {
            title: title,
            subtitle: subtitle,
            background: uploadBackground.secure_url,
            backgroundPublicId: uploadBackground.public_id,
            logo: urlLogo,
            logoPublicId: urlLogoPublicId
        }
    })

    if (data) {
        return {
            ...state,
            success: "تبلیغ با موفقیت ثبت شد"
        }
    } else {
        return {
            ...state,
            error: "ثبت تبلیغ انجام نشد"
        }
    }

}

export async function removeAds(id: number) {
    const adsSlider = await prisma.sliderAds.findUnique({ where: { id: id } })
    if (adsSlider?.backgroundPublicId) {
        await cloudinary.uploader.destroy(adsSlider.backgroundPublicId)
    }

    if (adsSlider?.logoPublicId) {
        await cloudinary.uploader.destroy(adsSlider.logoPublicId)
    }

    const data = await prisma.sliderAds.delete({ where: { id: id } })
}

export async function editAds(state: SliderState, formdata: Formdata) {
    const title = formdata.get("title")
    const subtitle = formdata.get("subtitle")
    const background = formdata.get("background")
    const logo = formdata.get("logo")
    const id = formdata.get("id")
    let urlLogo
    let urlLogoPublicId

    let urlbackground
    let urlbackgroundPublicId


    if (typeof title !== "string" || title.trim() === "") {
        return {
            ...state,
            errtitle: "فیلد تیتر نباید خالی باشد"
        }
    }




    if (background instanceof File && background.size > 0) {

        const slider = await prisma.sliderAds.findUnique({ where: { id: Number(id) } })

        if (slider?.backgroundPublicId) {
            await cloudinary.uploader.destroy(slider.backgroundPublicId)
        }

        const byte = await background.arrayBuffer()
        const buffer = Buffer.from(byte)

        const uploadBackground: any = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "background" },
                (error, result) => {
                    if (error) reject(error)
                    else resolve(result)
                }

            )

            stream.end(buffer)
        })



        urlbackground = uploadBackground.secure_url
        urlbackgroundPublicId = uploadBackground.public_id
    } else {
        urlbackground = formdata.get("oldBackground")
        urlbackgroundPublicId = formdata.get("oldBackgroundPublicId")
    }



    if (logo instanceof File && logo.size > 0) {

        const slider = await prisma.sliderAds.findUnique({ where: { id: Number(id) } })

        if (slider?.logoPublicId) {
            await cloudinary.uploader.destroy(slider.logoPublicId)
        }

        const byte = await logo.arrayBuffer()
        const buffer = Buffer.from(byte)

        const uploadLogo: any = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "logoSlider" },
                (error, result) => {
                    if (error) reject(error)
                    else resolve(result)
                }
            )

            stream.end(buffer)
        })



        urlLogo = uploadLogo.secure_url
        urlLogoPublicId = uploadLogo.public_id
    } else {
        urlLogo = formdata.get("oldLogo")
        urlLogoPublicId = formdata.get("oldLogoPblicId")
    }

    const data = await prisma.sliderAds.update({
        where: { id: Number(id) },
        data: {
            title: title,
            subtitle: subtitle,
            background: urlbackground,
            backgroundPublicId: urlbackgroundPublicId,
            logo: urlLogo,
            logoPublicId: urlLogoPublicId
        }
    })

    if (data) {
        return {
            ...state,
            success: "ویرایش با موفقیت انجام شد"
        }
    } else {
        return {
            ...state,
            error: " ویرایش انجام نشد"
        }
    }

}


export async function articleAction(state: ArticleState, formdata: Formdata) {
    const title = formdata.get("title")
    const slug = formdata.get("slug")
    const summary = formdata.get("summary")
    const image = formdata.get("image")
    const author = formdata.get("author")
    const content = formdata.get("content")



    if (typeof title !== "string" || title.trim() === "") {
        return {
            ...state,
            errtitle: "فیلد تیتر نباید خالی باشد"
        }
    }

    if (typeof content !== "string" || content.trim() === "") {
        return {
            ...state,
            errcontent: "فیلد متن اصلی نباید خالی باشد"
        }
    }


    if (!(image instanceof File) || image.size === 0) {
        return {
            ...state,
            errimage: "فیلد تصویر مقاله نباید خالی باشد"
        }
    }
    const byte = await image.arrayBuffer()
    const buffer = Buffer.from(byte)

    const uploadImage: any = await new Promise((resolve, reject) => {
        const stream = cloudinary.uploader.upload_stream(
            { folder: "image" },
            (error, result) => {
                if (error) reject(error)
                else resolve(result)
            }

        )

        stream.end(buffer)
    })


    const data = await prisma.articles.create({
        data: {
            title: title,
            summary: summary,
            content: content,
            image: uploadImage.secure_url,
            imagePublicId: uploadImage.public_id,
            author: author,
            slug: slug
        }
    })

    if (data) {
        return {
            ...state,
            success: "تبلیغ با موفقیت ثبت شد"
        }
    } else {
        return {
            ...state,
            error: "ثبت تبلیغ انجام نشد"
        }
    }

}

export async function articleEdit(state: ArticleState, formdata: Formdata) {
    const id = formdata.get("id")
    const title = formdata.get("title")
    const slug = formdata.get("slug")
    const summary = formdata.get("summary")
    const image = formdata.get("image")
    const author = formdata.get("author")
    const content = formdata.get("content")
    const isPublished = formdata.get("isPublished")
    let urlImage
    let urlPublicId
    let publishedStatus



    if (typeof title !== "string" || title.trim() === "") {
        return {
            ...state,
            errtitle: "فیلد تیتر نباید خالی باشد"
        }
    }

    if (typeof content !== "string" || content.trim() === "") {
        return {
            ...state,
            errcontent: "فیلد متن اصلی نباید خالی باشد"
        }
    }

    if (image instanceof File && image.size > 0) {

        const article = await prisma.articles.findUnique({ where: { id: id } })

        if (article?.imagePublicId) {
            await cloudinary.uploader.destroy(article.imagePublicId)
        }

        const byte = await image.arrayBuffer()
        const buffer = Buffer.from(byte)

        const uploadImage: any = await new Promise((resolve, reject) => {
            const stream = cloudinary.uploader.upload_stream(
                { folder: "image" },
                (error, result) => {
                    if (error) reject(error)
                    else resolve(result)
                }

            )

            stream.end(buffer)
        })

        urlImage = uploadImage.secure_url
        urlPublicId = uploadImage.public_id

    } else {
        urlImage = formdata.get("oldImage")
        urlPublicId = formdata.get("oldImagePublicId")
    }

    if (isPublished === "false") {
        publishedStatus = false
    } else {
        publishedStatus = true
    }


    const oldData = await prisma.articles.findUnique({ where: { id: Number(id) } })
    const data = await prisma.articles.update({
        where: { id: Number(id) },
        data: {
            title: title,
            summary: summary,
            content: content,
            image: urlImage,
            imagePublicId: urlPublicId,
            author: author,
            slug: slug,
            isPublished: publishedStatus,
            publishedAt: !oldData?.publishedAt && isPublished ? new Date() : oldData?.publishedAt
        }
    })



    if (data) {
        return {
            ...state,
            success: "ویرایش مقاله با موفقیت انجام شد"
        }
    } else {
        return {
            ...state,
            error: " ویرایش انجام نشد"
        }
    }

}

export async function articleDelete(id: number) {

    const article = await prisma.articles.findUnique({ where: { id: id } })

    if (article?.imagePublicId) {
        await cloudinary.uploader.destroy(article.imagePublicId)
    }

    const data = await prisma.articles.delete({
        where: { id: id }
    })

}

export async function messageAction(state: MessageState, formdata: Formdata) {
    const name = formdata.get("name")
    const phone = formdata.get("phone")
    const email = formdata.get("email")
    const subject = formdata.get("subject")
    const messageText = formdata.get("messageText")

    if (typeof name !== "string" || name.trim() === "") {
        return {
            ...state,
            errName: "فیلد نام نباید خالی باشد"
        }
    }

    if (typeof phone !== "string" || phone.trim() === "") {
        return {
            ...state,
            errPhone: "فیلد شماره تماس نباید خالی باشد"
        }
    }

    if (typeof messageText !== "string" || messageText.trim() === "") {
        return {
            ...state,
            errMessage: " متن پیام نباید خالی باشد"
        }
    }



    const data = await prisma.messages.create({
        data: {
            name: name,
            phone: phone,
            email: email,
            messageSubject: subject,
            messageText: messageText
        }
    })

    if (data) {
        return {
            ...state,
            success: "پیام با موفقیت ارسال شد"
        }
    } else {
        return {
            ...state,
            error: "ارسال پیام با خطا مواجه شد"
        }
    }

}

