<template>
    <footer>
        <div class="container">
            <div class="content flex-space-between">
                <div class="signature">
                    <img src="../assets/Copyright © Skincash.ru.svg" alt="Skincash.ru, Все права защищены.">
                </div>
                <nav>
                    <ul>
                        <li><a href="#">Помощь</a></li>
                        <li><router-link to="/about">Контакты</router-link></li>
                        <li><a href="#">Пользовательское соглашение</a></li>
                    </ul>
                </nav>
            </div>
        </div>
    </footer>
</template>

<style scoped>
footer {
    width: 100vw;
    height: var(--Footer-height);
    background-color: #20222A;
    display: flex;
    align-items: center;
}
nav{
    width: 100%;
    max-width: 394px;
    height: auto;
}
ul{
    display: flex;
    gap: 1rem;
}
a{
    opacity: 0.5;
}
</style>