import ReactPortal from "./utils/ReactPortal"
import s from "../scss/components/Modal.module.scss"
import clsx from "clsx"
import x from "../assets/x.svg"


interface ModalProps {
    isOpen: boolean
    handleClose: () => void
    children?: React.ReactNode
}

export const Modal = ({ isOpen, handleClose, children }: ModalProps) => {
    return (
        <ReactPortal wrapperId="modal-wrapper">
            <div className={clsx(s.modal, isOpen ? s.open : s.close)}>
                <div className={s.modal_content}>
                    <div className={s.close_btn_container}><button className={s.close_btn} onClick={() => handleClose()}><img src={x} /></button></div>
                    {children}
                </div>
            </div>
        </ReactPortal>
    )
}