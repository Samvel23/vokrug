import Link from "next/link";
import React, { useState } from "react";
import { Title } from "./title";
import { Button } from "../ui/button";
import { Plus } from "lucide-react";

interface Props {
  id: number;
  name: string;
  price: number;
  imageUrl: string;
  className?: string;
}

export const ProductCard: React.FC<Props> = ({
  id,
  name,
  price,
  imageUrl,
  className,
}) => {
  const copyToClipboard = (text: string) => {
    if (navigator.clipboard) {
      navigator.clipboard.writeText(text).then();
    } else {
      // Fallback for older browsers
      const textField = document.createElement("textarea");
      textField.innerText = text;
      document.body.appendChild(textField);
      textField.select();
      document.execCommand("copy");
      textField.remove();
    }
  };
  const [isModalOpen, setIsModalOpen] = useState(false);

  const array = [
    "Эконом такси — дешево, быстро, удобно",
    "Стандарт такси — комфорт по разумной цене",
    "Комфорт такси — удобство и высокий уровень сервиса",
    "Комфорт+ такси — повышенный комфорт и сервис премиум-класса",
    "Бизнес такси — статус, комфорт и премиальный сервис",
    "Минивэн такси — простор и удобство для групп и больших семей",
    "Премиум такси — роскошь, стиль и безупречный сервис",
  ];

  const descriptionArray = [
    "Lada Granta, Lada Vesta, Reanult Logan",
    "Hyundai solaris, Skoda Rapid, Kia Rio и. т. д.",
    "Skoda Octavia, Kia Cerato, Hyundai Elantra",
    "Haval, Chery Arrizo 8, Skoda Superb, Kia K5 и. т. д.",
    "BMW M5, Mercedes E Class и. т. д.",
    "Toyota Alphard и. т. д.",
    "Mercedes S Class, BMW M7",
  ];

  const toggleModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  return (
    <>
      <div className={className} onClick={toggleModal}>
        <div className="flex justify-center p-6 bg-secondary rounded-lg h-auto cursor-pointer sm:h-[260px]">
          <img
            className="w-full h-auto max-w-full max-h-full"
            src={imageUrl}
            alt={name}
          />
        </div>

        <Title text={name} size="sm" className="mb-1 mt-3 font-bold" />

        <p className="text-sm text-grey-400">
          {id === 1 ? array[0] : array[id - 1]}
        </p>

        <div className="flex justify-content items-center mt-4">
          <span className="text-[20px]">
            1км от <b>{price} руб.</b>
          </span>
        </div>
      </div>

      {isModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black bg-opacity-50">
          <div className="bg-white rounded-lg p-6 w-[90%] max-w-md">
            <h2 className="text-lg font-bold mb-4">{name}</h2>
            {id === 1 ? descriptionArray[0] : descriptionArray[id - 1]}
            <p className="mb-4">Цена: 1км от {price} руб.</p>
            <img className="w-full h-[200px] mb-4" src={imageUrl} alt={name} />
            <div className="flex flex-col gap-2">
              <p>Хотите заказать такси?</p>
              <p className="flex flex-col">
                Тогда позвоните{" "}
                <span
                  onClick={() => copyToClipboard("+79934477703")}
                  className="transition-colors duration-200 hover:text-blue-500 cursor-pointer"
                >
                  +79934477703
                </span>
                <span
                  onClick={() => copyToClipboard("+79495925642")}
                  className="transition-colors duration-200 hover:text-blue-500 cursor-pointer"
                >
                  +79495925642
                </span>
              </p>
              <p>
                либо зайдите в{" "}
                <a
                  href="https://t.me/+jByqV6B7vfxjYmUy"
                  className="text-blue-500"
                >
                  Телеграм
                </a>{" "}
                канал
              </p>
            </div>
            <Button variant="secondary" className="mt-4" onClick={toggleModal}>
              Закрыть
            </Button>
          </div>
        </div>
      )}
    </>
  );
};
