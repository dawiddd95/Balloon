<template>
    <footer class="footer">
        <div class="footer__container">
            <div class="footer__social-wrapper">
                <NuxtLink to="/">
                    <img class="footer__logo" src="~/assets/logo-white.png" alt="logo">
                </NuxtLink>
                <div class="footer__socials">
                    <div class="footer__social-item">
                        <img src="~/assets/Instagram.svg" alt="instagram">
                    </div>
                    <div class="footer__social-item">
                        <img src="~/assets/Twitter.svg" alt="twitter">
                    </div>
                    <div class="footer__social-item">
                        <img src="~/assets/Youtube.svg" alt="youtube">
                    </div>
                </div>
            </div>
            <div class="footer__copyright">
                © 2023 BLNRY frontend challenge. All rights reseved
            </div>
            
        </div>
    </footer>
</template>
  
<script>

export default {
    name: 'FooterComponent'
};
</script>
  
<style scoped lang="scss">
.footer {
    max-width: 100%;
    background: var(--black, #201B21);
    height: 128px;

    @media screen and (min-width: 1116px) {
        height: 72px;
        display: flex;
        align-items: center;
    }

    &__container {
        max-width: 100%;
        padding: 24px 20px;
        display: flex;
        flex-direction: column;

        @media screen and (min-width: 1116px) {
            width: 1116px;
            margin-left: auto;
            margin-right: auto;
            flex-direction: row;
            align-items: center;
            justify-content: space-between;
            padding: 0;
            position: relative;
        }
    }

    &__logo {
        width: 135px;
        height: 24px;
    }

    &__social-wrapper {
        display: flex;
        flex-direction: row;
        justify-content: space-between;
    }

    &__socials {
        width: 104px;
        height: 24px;

        display: flex;
        justify-content: space-between;

        @media screen and (min-width: 1116px) {
            position: absolute;
            right: 0;
        }
    }

    &__copyright {
        max-width: 167px;
        color: var(--text-gray-300, #D9DBE1);
        font-feature-settings: 'liga' off;
        font-family: Inter Tight;
        font-size: 12px;
        font-style: normal;
        font-weight: 400;
        line-height: 18px;
        margin-top: 20px;

        @media screen and (min-width: 1116px) {
            max-width: none;
            margin-top: 0;
            font-size: 14px;
            position: absolute;
            left: 50%;
            top: 50%;
            transform: translate(-50%, -50%);
        }
    }
}
</style>