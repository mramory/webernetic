import { Button } from "./components/ui/Button"
import { ArrowIcon } from "./components/icons/ArrowIcon"
import s from "./scss/pages/Page.module.scss"
import image from "./assets/image.png"
import { Modal } from "./components/Modal"
import { useState } from "react"
import { Input } from "./components/ui/Input"

function App() {
  const [isOpen, setIsOpen] = useState(false)

  return (
    <main className={s.wrapper}>
      <div className={s.info}>
        <div>
          <h1>Демо-версия</h1>
          <p>За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500 средних и малых проектов. Используя знания и накопленный опыт мы можем предложить </p>
          <Button onClick={() => setIsOpen(true)} rounded>
            <span>Попробовать бесплатно</span>
            <ArrowIcon className={s.arrow} />
          </Button>
        </div>
      </div>
      <div className={s.image}>
        <img src={image} />
      </div>
      <Modal isOpen={isOpen} handleClose={() => setIsOpen(false)}>
        <div className={s.modal}>
          <h2>Войти в систему</h2>
          <div className={s.inputs}>
            <Input placeholder="Email/Телефон" />
            <Input placeholder="Пароль" />
          </div>
          <div className={s.checkbox}>
            <input type="checkbox" id="remind" name="remind" />
            <label htmlFor="remind">Запомнить пароль</label>
          </div>
          <a>Восстановить</a>
          <div className={s.btns}>
            <Button>Войти</Button>
            <Button variant="secondary">Зарегестрироваться</Button>
          </div>
        </div>
      </Modal>
    </main>
  )
}

export default App
