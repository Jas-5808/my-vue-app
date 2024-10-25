<template>
    <header>
        <div class="container">
            <div class="content">
                <div class="leftHeader">
                    <img src="../assets/Header/Logo.svg" alt="Логотип" />
                    <nav>
                        <ul>
                            <li><a href="#">Помощь</a></li>
                            <li><a href="#">Контакты</a></li>
                        </ul>
                    </nav>
                </div>
                <div class="flex-space-between rightHeader">
                    <div class="dropdown">
                        <button class="dropdown-button" @click="toggleDropdown">
                            <img :src="currentFlag" :alt="`${currentLanguage} Флаг`" class="current-flag" />
                            <span class="language-code">{{ currentLanguage }}</span>
                            <svg class="dropdown-arrow" :class="{ 'rotate-arrow': isDropdownOpen }" width="24" height="24" viewBox="0 0 24 24">
                                <path d="M7 10l5 5 5-5z" fill="#ffffff" />
                            </svg>
                        </button>
                        <!-- Плавное открытие списка -->
                        <div class="dropdown-content" :class="{ 'open': isDropdownOpen }">
                            <div class="dropdown-item" v-for="(lang, index) in languages" :key="index" @click="setLanguage(lang.code, lang.flag)">
                                <img :src="lang.flag" :alt="`${lang.name} Флаг`" class="square-flag" />
                                <span>{{ lang.code }}</span>
                            </div>
                        </div>
                    </div>
                    <button type="button" aria-label="Войти в аккаунт">Войти</button>
                </div>
            </div>
        </div>
    </header>
</template>

<script setup>
import { ref } from 'vue';
import RussiaFlag from '../assets/Header/SquareFlag/russia.svg';
import ENFlag from '../assets/Header/SquareFlag/EN.svg';
import KazakhstanFlag from '../assets/Header/SquareFlag/Kazakhstan.svg';

const languages = ref([
    { code: 'RU', flag: RussiaFlag, name: 'Русский' },
    { code: 'EN', flag: ENFlag, name: 'Английский' },
    { code: 'KZ', flag: KazakhstanFlag, name: 'Казахский' },
]);

const currentLanguage = ref('RU');
const currentFlag = ref(languages.value[0].flag);

const isDropdownOpen = ref(false);

function setLanguage(langCode, flagPath) {
    currentLanguage.value = langCode;
    currentFlag.value = flagPath;
    isDropdownOpen.value = false;
}

function toggleDropdown() {
    isDropdownOpen.value = !isDropdownOpen.value;
}
</script>

<style scoped>
header {
    width: 100vw;
    height: var(--Header-height);
    background-color: #20222A;
    display: flex;
    justify-content: center;
    color: #FFFFFF;
}

img {
    cursor: pointer;
}

ul {
    display: flex;
    gap: 1rem;
}

.leftHeader {
    width: 100%;
    max-width: 468px;
    display: flex;
    justify-content: space-between;
    align-items: center;
}

.rightHeader {
    max-width: 217px;
    width: 100%;
}

nav {
    width: 100%;
    max-width: 156px;
}

.content {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

button {
    width: 6rem; /* Используем rem для лучшей адаптивности */
    height: 40px;
    border-radius: 24px; /* Уменьшили закругление для улучшения внешнего вида */
    background-color: #F4C038;
    cursor: pointer;
    transition: background-color 0.3s ease;
}

button:hover {
    background-color: #e6b02e; /* Плавная смена цвета на hover */
}

/* Dropdown styles */
.dropdown {
    position: relative;
    display: inline-block;
}

.dropdown-content {
    position: absolute;
    background-color: #281010;
    min-width: 160px;
    box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.2);
    z-index: 1;
    max-height: 0; /* Начальное состояние - высота 0 */
    overflow: hidden; /* Скрываем содержимое */
    transition: max-height 0.5s ease; /* Плавный переход высоты */
}

.dropdown-content.open {
    max-height: 300px; /* Максимальная высота при открытии */
    overflow-y: auto; /* Добавили прокрутку для больших списков */
}

.dropdown-item {
    display: flex;
    align-items: center;
    padding: 8px 12px;
    cursor: pointer;
}

.dropdown-item:hover {
    background-color: #3f1212;
}

.dropdown-button {
    padding: 8px 12px;
    border: 1px solid #3D4554;
    cursor: pointer;
    background-color: #20222A;
    display: flex;
    align-items: center;
}

.square-flag {
    width: 24px;
    height: 24px;
    margin-right: 8px;
}

.current-flag {
    width: 24px;
    height: 24px;
    border-radius: 50%; /* Флаг становится круглым */
    margin-right: 8px;
}

.language-code {
    font-size: 16px;
    font-weight: bold;
}

/* Анимация для стрелки */
.dropdown-arrow {
    transition: transform 0.5s ease; /* Более плавная анимация */
}

.rotate-arrow {
    transform: rotate(180deg); /* Поворот стрелки вниз */
}

span {
    color: white;
}

/* Медиа-запросы для мобильных устройств */
@media (max-width: 768px) {
    .rightHeader, .leftHeader {
        width: 100%;
        justify-content: space-between;
    }

    .dropdown-button {
        width: 100%;
    }
}

</style>