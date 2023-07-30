# Договорённости по написанию CSS-стилей

1. Использование БЭМ-методологии при именовании стилей.

2. Импортировать стили в файл Component.jsx из файла Component.scss.
```
Component
  Component.jsx
  Component.scss
```

3. Если в Component больше одного блока со стилями и файл становится неудобным для работы, то импортировать стили для блоков из разных файлов папки styles внутри Components.
```
Component
  styles
    firts-block.scss
    second-block.scss
    ...
  Component.jsx
  Component.scss
```

4. Если стилей в блоке много, то делить блок по элементам БЭМ-методологии, при этом если блок в компоненте всего 1, то в папке styles хранить сразу папки элементов. Импорт всех стилей всегда производится в файле Component.scss.
```
А. Один объёмный блок в компоненте

Component
  styles
    __first-element
      component-block__first-element.scss
    __second-element
      component-block__first-element.scss
    ...
    component-block.scss
  Component.jsx
  Component.scss


Б. Больше одного блока и большое количество стилей суммарно

Component
  styles
    first-block
      __first-element
        first-block__first-element.scss
      __second-element
        first-block__first-element.scss
      ...
      first-block.scss
    small-second-block
      small-second-block.scss // количество стилей в блоке позволяет удобно читать их в 1 файле
    ...
  Component.jsx
  Component.scss
```

5. Сначала писать селекторы для блока, потом для его элементов, дальше для второго блока, его элементов и так далее. Оставлять между селекторами пустую строку, каждый стиль с новой строки. Избегать комбинированных селекторов, но если они необходимы, то распологать рядом с использованными элементами или как вложенные селекторы.

6. Псевдоклассы и модификаторы писать во вложенных стилях, отделив пустой строкой от стилей селектора, по следующему порядку: псевдоклассы селектора, модификаторы селектора без ключа (псевдоклассы этих модификаторов располагать внутри селектора по тем же правилам), ключи (во вложенных селекторах его значения и их псевдоклассы), комбинированные селекторы. Оставлять пустую строку между псевдоклассами и модификаторами, между модификаторами и ключами, между разными ключами и между ключами и комбинированными селекторами.
```
.component-block__element {
  display: flex;
  ...
  box-sizing: border-box;

  &:hover {
    transform: scale(1.1);
    ...
  }
  &::after {
    content: attr(href);
    ...

    &:hover {
      ...
    }
  }

  &_modified {
    background-color: var(--color-accent-base);
    ...

    &:hover {
      background-color: var(--color-accent-hover);
    }
  }
  &_differently-modified {
    ...
  }

  &_first-key {
    &_first-value {
      ...
    }
    &_second-value {
      ...
    }
    ...
  }

  &_second-key {
    ...
  }
}
```

7. Если используются комбинированные селекторы и первый селектор содержит достаточно стилей или вложенных селекторов, чтобы они негативно влияли на читаемость, то комбинированные селекторы прописывать отдельно рядом с элементом.

8. Все цвета и семейства шрифтов задавать через переменные. Избегать использования !important.

9. Переменные хранить в src/utils/vars.css. Именовать CSS-переменные в виде --${свойство}-${для_чего}-${модификатор}, используя только строчные буквы. Не указывать в модификаторах значения. Между переменными для разных свойств оставлять пустую строку.
```
// файл src/utils/vars.css
:root {
  --color-background-base: #fef4e8;
  --color-background-additional: #fff;
  ...
  
  --font-family-title: 'Montserrat Alternates', 'Inter', Arial, sans-serif;
  --font-family-base: 'Inter', Arial, sans-serif;
  ...
}
```

10. Если нужны сецифические переменные для отдельного компонента и добавление их в src/utils/vars.css приведёт к противоречию, то хранить эти переменные в папке Component и подключать в Component.scss только для конкретного блока компонента или нескольких блоков в виде перечисления селекторов.
```
А. Компактный компонент без папки styles

Component
  Component.jsx
  Component.scss
  vars.css


Б. Есть папка styles в компоненте. Тогда создавать отдельную папку component-block в styles, даже если всего один блок

Component
  styles
    ...
    vars.css
  Component.jsx


// файл Component/styles/vars.css, если всего один блок
.component-block {
  --color-background-base: #4bab65;
  ...
}

// файл Component/styles/vars.css, если больше одного блока
.first-block,
.second-block {
  --color-background-base: #4bab65;
  ...
}
```
