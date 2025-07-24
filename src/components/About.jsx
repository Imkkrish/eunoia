export default function About() {
  return (
    <section id="about" className="py-24 -mt-1 px-8 bg-gradient-to-b from-[#8ebbe1] via-[#7ca9d1] to-[#5e90bf] text-white">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10 text-center md:text-left">
        <div className="flex-shrink-0">
          <img
            src="/logo.png"
            alt="Eunoia Innovations Logo"
            className="h-28 w-auto object-contain mx-auto md:mx-0"
          />
        </div>
        <div className="max-w-2xl">
          <h2 className="text-2xl md:text-3xl font-semibold mb-4">
            Empowering the Blue Planet
          </h2>
          <p className="text-md md:text-lg leading-relaxed">
            At <strong>Eunoia Innovations</strong>, we believe in harnessing the
            boundless possibilities of the ocean. Our mission is to redefine
            maritime exploration and operations using state-of-the-art robotic
            solutions. Bridging the gap between technology and the deep blue,
            we aim to create a world where marine tasks are safer, efficient,
            and more sustainable.
          </p>
        </div>
      </div>
    </section>
  );
}
