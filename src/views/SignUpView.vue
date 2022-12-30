<script>
import FormInput from '@/components/Form-input.vue'
import UserIcon from '@/components/icons/user-icon.vue'
import MessageIcon from '@/components/icons/message-icon.vue'
import LockIcon from '@/components/icons/lock-icon.vue'
import EyeIcon from '@/components/icons/eye-icon.vue'
export default {
    name: "SignUp",
    components: {
        FormInput,
        UserIcon,
        MessageIcon,
        LockIcon,
        EyeIcon,
    }
}
</script>

<template>
    <section class="relative">
        <div class="grid md:grid-cols-2">
            <div class="max-h-[43rem]">
                <picture>
                    <source media="(min-width: 800px)" srcset="@/assets/img/Create_Account_Screen=Tablet.png">
                    <source media="(min-width: 1200px)" srcset="@/assets/img/Create_Account_Screen=Desktop.png">
                    <img srcset="@/assets/img/Create_Account_Screen=Mobile.png" />
                </picture>
            </div>
            <div class="container mx-auto py-8 px-4 md:px-8 lg:px-20">
                <div class="grid gap-8">
                    <h1 class="text-4xl xl:text-6xl font-bold">Create Account</h1>
                    <p class="text-lg xl:text-2xl tracking-wider capitalize">Welcome! Enter your details and start creating, collecting and selling NFTs.</p>

                    <form class="grid gap-4 w-full lg:max-w-xs">
                        <form-input :inputName="'username'" :inputType="'text'" :placeholder="'Username'" required>
                            <template #prepend>
                                <user-icon class="text-primaryColor"/>
                            </template>
                        </form-input>

                        <form-input :inputName="'email'" :inputType="'email'" :placeholder="'Email Address'" required>
                            <template #prepend>
                                <message-icon class="text-primaryColor"/>
                            </template>
                        </form-input>

                        <form-input :inputName="'password'" :inputType="'password'" :placeholder="'Password'" required>
                            <template #prepend>
                                <lock-icon class="text-primaryColor"/>
                            </template>
                            <template #append>
                                <eye-icon class="text-primaryColor"/>
                            </template>
                        </form-input>

                        <form-input :inputName="'comfirm_pass'" :inputType="'password'" :placeholder="'Confirm Password'" required>
                            <template #prepend>
                                <lock-icon class="text-primaryColor"/>
                            </template>
                            <template #append>
                                <eye-icon class="text-primaryColor"/>
                            </template>
                        </form-input>

                        <form-input :inputName="'submit'" :inputType="'submit'" :inputValue="'Create account'" class="bg-primaryColor text-white font-bold cursor-pointer" />
                    </form>
                </div>
            </div>
        </div>
    </section>
</template>

<style>

</style>