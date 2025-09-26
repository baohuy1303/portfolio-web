import { title } from "@/components/primitives";
import DefaultLayout from "@/layouts/default";
import { Image } from "@heroui/react";

export default function DocsPage() {
  return (
    <>
      <section className="flex flex-col gap-4 py-8 md:py-10">
              <h1 className="text-3xl font-bold mb-3 self-baseline">
                  About me
              </h1>
              <p className="text-xl">
                  Hi I'm Huy <span className="inline-block hover:[animation:wave_1s_ease-in-out_infinite] cursor-default">👋</span>
              </p>
              <p>
                  I'm an aspiring software engineer, trying my best to make web apps that could save people's time and make their life easier :)
                <br /> <br />
                I started with game development and content creation when I was in 7th grade, and the feeling of releasing a product that people could enjoy have always
                been a driving force for me to continue learning and improving. As I grew older, I realized that games were mainly for entertainment and making web apps would have a more tangible impact on people's problems.
                <br /> <br />
                When I finished developing the new admin system for my company, I got to witness first-hand the impact of my work on people's lives, people that I loved, and it was a very fulfilling experience!
                <br /> <br />
                I'm always eager and constantly learning new skills and technologies to expand my arsenal, to help others, and to make a positive impact!
              </p>
      </section>
      <section className="flex flex-col gap-4 py-8 md:py-10">
        <h1 className="text-3xl font-bold mb-3 self-baseline">
            Me and my hobbies
        </h1>
        <div className="columns-1 md:columns-2 gap-4">
          <Image
              src="/about/_FLS0278.webp"
              alt=""
              className="mb-4 w-full rounded-lg"
              isBlurred
          />
          <Image
              src="/about/GENZ.webp"
              alt=""
              className="mb-4 w-full rounded-lg"
              isBlurred
          />
          <Image
              src="/about/IMG_4983.webp"
              alt=""
              className="mb-4 w-full rounded-lg"
              isBlurred
          />
          <Image
              src="/about/IMG_9937.webp"
              alt=""
              className="mb-4 w-full rounded-lg"
              isBlurred
          />
          <Image
              src="/about/LEC04662.webp"
              alt=""
              className="mb-4 w-full rounded-lg"
              isBlurred
          />
          <Image
              src="/about/z6929604707463_dabd5f4d52d0a373cd8d29156b6f617d.webp"
              alt=""
              className="mb-4 w-full rounded-lg"
              isBlurred
          />
          <Image
              src="/about/z6929604977419_6766b00c50059381957199422b3574ab.webp"
              alt=""
              className="mb-4 w-full rounded-lg"
              isBlurred
          />
          <Image
              src="/about/z6929605179612_51068d3cf5c1af4f3ed0cf4c493b0d77.webp"
              alt=""
              className="mb-4 w-full rounded-lg"
              isBlurred
          />
          <Image
              src="/about/z6929605399495_40f36ef54eb1d237560940b30d25f822.webp"
              alt=""
              className="mb-4 w-full rounded-lg"
              isBlurred
          />
          <Image
              src="/about/z6929654714579_9b0cd7f57d1cd0a5f9f0b98516eba28d.webp"
              alt=""
              className="mb-4 w-full rounded-lg"
              isBlurred
          />
          <Image
              src="/about/z6929654986261_e371bdfec28fb0570ffa8e4c77fece24.webp"
              alt=""
              className="mb-4 w-full rounded-lg"
              isBlurred
          />
          <Image
              src="/about/z6929655163760_9db62d8c24074a590d6f5992bacee038.webp"
              alt=""
              className="mb-4 w-full rounded-lg"
              isBlurred
          />
      </div>
      </section>
    </>
  );
}
