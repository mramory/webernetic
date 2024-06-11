import { Button } from "./components/ui/Button"
import { ArrowIcon } from "./components/icons/ArrowIcon"
import s from "./scss/pages/Page.module.scss"
import image from "./assets/image.png"

function App() {
  return (
    <main className={s.wrapper}>
      <div className={s.info}>
        <div>
          <h1>Демо-версия</h1>
          <p>За 18 лет деятельности было реализовано более 500 крупных, а так же, не менее 2500 средних и малых проектов. Используя знания и накопленный опыт мы можем предложить </p>
          <Button rounded>
            <span>Попробовать бесплатно</span>
            <ArrowIcon className={s.arrow} />
          </Button>
        </div>
      </div>
      <div className={s.image}>
        <img src={image} />
      </div>
    </main>
  )
}

export default App
