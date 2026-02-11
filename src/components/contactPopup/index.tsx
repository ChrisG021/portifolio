import { FaX } from "react-icons/fa6";
import "./style.css";
import { FaPaperPlane } from "react-icons/fa";
import { useState } from "react";
import { saveContactMessage } from "@/services/contactService";
import type { ContactFormData } from '@/services/contactService'
export default function ContactPopup({ setCallPopup }: any) {

    const [formData, setFormData] = useState({
        name: '',
        email: '',
        subject: '',
        message: '',
    });

    const [status, setStatus] = useState('');

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();
        setStatus('sending');

        try {
            const result = await saveContactMessage(formData);

            if (result.success) {
                setStatus('success');
                setFormData({ name: '', email: '', subject: '', message: '' });
                setTimeout(() => setStatus(''), 3000);
            } else {
                setStatus('error');
                setTimeout(() => setStatus(''), 3000);
            }
        } catch (error) {
            console.error('Erro ao enviar mensagem:', error);
            setStatus('error');
            setTimeout(() => setStatus(''), 3000);
        }
    };

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value,
        });
    };


    return (
        <div className="fixed flex justify-center items-center w-full h-screen  bg-(--primary-color) z-1000 ">
            <div className="flex flex-col contactpopup ">
                <div className="flex w-full items-center justify-between ">
                    <div>
                        <p className="text-(--foreground) opacity-10">&lt;CG/&gt;</p>
                    </div>
                    <div onClick={() => setCallPopup(false)} className="cursor-pointer border border-(--foreground) p-3 text-xs">
                        <FaX />
                    </div>
                </div>

                <form className="flex flex-col p-2.5 gap-10" onSubmit={handleSubmit}>
                    {/* titulo */}
                    <h1>Entre em contato</h1>

                    {/* description */}
                    <p></p>
                    <div className="flex flex-col gap-10">
                        {/* os input */}
                        <div>
                            <p>Seu nome</p>
                            <div className="input-container">
                                <input
                                    type="text"
                                    id="name"
                                    name="name"
                                    value={formData.name}
                                    onChange={handleChange}
                                    required
                                    placeholder="Como posso te chamar?"
                                />
                            </div>
                        </div>
                        <div>
                            <p>Seu email</p>
                            <div className="input-container">
                                <input
                                    type="email"
                                    id="email"
                                    name="email"
                                    value={formData.email}
                                    onChange={handleChange}
                                    required
                                    placeholder="seu@email.com"
                                />
                            </div>
                        </div>
                        <div>
                            <p>Assunto</p>
                            <div className="input-container">
                                <input
                                    type="text"
                                    id="subject"
                                    name="subject"
                                    value={formData.subject}
                                    onChange={handleChange}
                                    required
                                    placeholder="Como posso ajudar?"
                                />
                            </div>
                        </div>
                        <div>
                            <p>Mensagem</p>
                            <div className="input-container">
                                {/* <input type="text" placeholder="" /> */}
                                <textarea
                                    id="message"
                                    name="message"
                                    value={formData.message}
                                    onChange={handleChange}
                                    className="w-full outline-none"
                                    required
                                    placeholder="Me conte um pouco mais sobre sua ideia..."
                                    rows={6}
                                />
                            </div>
                        </div>
                    </div>
                    <div>
                        {/* <a href="mailto:christopheguerra67@gmail.com" onClick={() => setCallPopup(false)} className="flex items-center gap-5 w-fit border px-5 py-3 lg:px-8 lg:py-4 border-(--foreground) transition-all ease-in  hover:bg-(--foreground) hover:text-(--primary-color)">
                            <span>enviar mensagem</span>
                            <FaPaperPlane />
                        </a> */}

                        <button
                            type="submit"
                            className="flex items-center gap-5 w-fit border px-5 py-3 lg:px-8 lg:py-4 border-(--foreground) transition-all ease-in  hover:bg-(--foreground) hover:text-(--primary-color)"
                            disabled={status === 'sending'}
                        >
                            <span>
                                {status === 'sending' && 'Enviando...'}
                                {status === 'success' && 'Mensagem Enviada!'}
                                {status === 'error' && 'Erro ao enviar'}
                                {!status && 'Enviar Mensagem'}
                            </span>
                            <FaPaperPlane />
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}