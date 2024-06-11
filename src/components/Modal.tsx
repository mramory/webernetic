import ReactPortal from "./utils/ReactPortal"
import s from "../scss/components/Modal.module.scss"
import clsx from "clsx"
import x from "../assets/x.svg"
import { Input } from "./ui/Input"
import { Button } from "./ui/Button"

interface ModalProps {
    isOpen: boolean
    handleClose: () => void
}

export const Modal = ({ isOpen, handleClose }: ModalProps) => {
    return (
        <ReactPortal wrapperId="modal-wrapper">
            <div className={clsx(s.modal, isOpen ? s.open : s.close)}>
                <div className={s.modal_content}>
                    <div className={s.close_btn_container}><button className={s.close_btn} onClick={() => handleClose()}><img src={x} /></button></div>
                    <div>
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
                </div>
            </div>
        </ReactPortal>
    )
}