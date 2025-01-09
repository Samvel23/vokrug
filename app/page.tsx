import { Container, Title } from "@/components/shared";
import { ProductGroupList } from "@/components/shared/products-group-list";
import { TopBar } from "@/components/shared/top-bar";
import vesta from "./photos/vesta.png";
import rio from "./photos/rio.png";
import elantra from "./photos/elantra.png";
import haval from "./photos/haval.png";
import k5 from "./photos/k5.png";
import alphard from "./photos/alphard.png";
import sclasse from "./photos/Sclasse.png";
import Image from "next/image";
import telegPic from "./photos/telegram.png";
import whatsPic from "./photos/whatsapp.png";
export default function Home() {
  return (
    <>
      <Container className="mt-11">
        <Title
          text="Все Междугородные Такси"
          size="lg"
          className="font-extrabold"
        />
      </Container>
      <TopBar />
<<<<<<< HEAD
          <Container className="flex-1 p-10">
=======
      <Container className="flex-1">
>>>>>>> 6e0a0e96322eda1107c10afe53075bf9066ce0ce
        <div className="flex flex-col gap-16">
          <ProductGroupList
            title="Междугородное Такси"
            items={[
              {
                id: 1,
                name: "Эконом",
                imageUrl: vesta.src,
<<<<<<< HEAD
                price: 25,
                items: [{ price: 25 }],
=======
                price: 20,
                items: [{ price: 20 }],
>>>>>>> 6e0a0e96322eda1107c10afe53075bf9066ce0ce
              },
              {
                id: 2,
                name: "Стандарт",
                imageUrl: rio.src,
<<<<<<< HEAD
                price: 30,
                items: [{ price: 30 }],
=======
                price: 25,
                items: [{ price: 25 }],
                // Эконом 1км от 20р
                // Стандарт 1км от 25р
                // Комфорт 1км от 30р
                // Комфорт плюс 1км от 35р
                // Бизнес 1км от 50р
                // Минивэн 1км от 45р
                // Премиум 1км от 70р
>>>>>>> 6e0a0e96322eda1107c10afe53075bf9066ce0ce
              },
              {
                id: 3,
                name: "Комфорт",
                imageUrl: elantra.src,
<<<<<<< HEAD
                price: 35,
                items: [{ price: 35 }],
=======
                price: 30,
                items: [{ price: 30 }],
>>>>>>> 6e0a0e96322eda1107c10afe53075bf9066ce0ce
              },
              {
                id: 4,
                name: "Комфорт +",
                imageUrl: haval.src,
<<<<<<< HEAD
                price: 40,
                items: [{ price: 40 }],
=======
                price: 35,
                items: [{ price: 35 }],
>>>>>>> 6e0a0e96322eda1107c10afe53075bf9066ce0ce
              },
              {
                id: 5,
                name: "Бизнес",
                imageUrl: k5.src,
                price: 50,
                items: [{ price: 50 }],
              },
              {
                id: 6,
                name: "Минивэн",
                imageUrl: alphard.src,
                price: 45,
                items: [{ price: 45 }],
              },
              {
                id: 7,
                name: "Премиум",
                imageUrl: sclasse.src,
                price: 70,
                items: [{ price: 70 }],
              },
            ]}
            categoryId={1}
          />
          <div className="flex flex-col gap-16">
            <ProductGroupList title="WhatsApp" items={[]} categoryId={2} />
            <a href="https://wa.me/qr/4U5WQNI6DIRAF1">
              <Image
                src={whatsPic}
                alt="WhatsApp"
                width={400}
                height={400}
              />
            </a>
          </div>
          <div className="flex flex-col gap-16">
            <ProductGroupList title="Телеграм" items={[]} categoryId={3} />
            <a href="https://t.me/+jByqV6B7vfxjYmUy">
              <Image
                src={telegPic}
                alt="Телеграм"
                width={400}
                height={400}
              />
            </a>
          </div>
          <div className="flex flex-col gap-16">
            <ProductGroupList title="О нас" items={[]} categoryId={4} />
            <ul className="flex flex-col gap-5 list-disc pl-5 md:gap-10 md:text-5xl md:pl-50">
              <li className="text-2xl md:text-5xl">
                Автомобили от эконома до премиум класса, по самым низким ценам
              </li>
              <li className="text-2xl md:text-5xl">Опыт более чем 15 лет</li>
              <li className="text-2xl md:text-5xl">
                Междугородные поездки по всей России
              </li>
              <li className="text-2xl md:text-5xl">
                Поездки по ДНР, ЛНР, Крым
              </li>
              <li className="text-2xl md:text-5xl">Поездки в другие страны</li>
            </ul>
          </div>
          <div></div>
        </div>
      </Container>
    </>
  );
}
