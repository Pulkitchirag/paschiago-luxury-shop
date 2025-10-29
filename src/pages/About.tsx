import aboutHero from "@/assets/about-hero.jpg";

const About = () => {
  return (
    <div className="min-h-screen pt-32 pb-20">
      {/* Hero Section */}
      <section className="px-4 mb-20">
        <div className="container mx-auto">
          <div className="grid md:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="font-serif text-5xl sm:text-6xl font-bold mb-6">
                Our Story
              </h1>
              <p className="text-lg leading-relaxed mb-4">
                Paschiago was born from a passion for timeless elegance and uncompromising quality. 
                We believe that luxury should be more than just a label—it should be an experience, 
                a feeling, a way of life.
              </p>
              <p className="text-lg leading-relaxed text-muted-foreground">
                Every piece in our collection is a testament to exceptional craftsmanship, 
                carefully designed to transcend trends and become a cherished part of your wardrobe 
                for years to come.
              </p>
            </div>
            <div className="bg-luxury-cream aspect-[4/3]">
              <img
                src={aboutHero}
                alt="Paschiago Atelier"
                className="w-full h-full object-cover"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Mission Section */}
      <section className="px-4 py-20 luxury-gradient">
        <div className="container mx-auto max-w-4xl text-center">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-6">
            Our Mission
          </h2>
          <p className="text-lg leading-relaxed mb-6">
            To create clothing that empowers individuals to express their unique style 
            with confidence and sophistication. We are committed to sustainable practices 
            and ethical production, ensuring that luxury and responsibility go hand in hand.
          </p>
          <p className="text-lg leading-relaxed text-muted-foreground">
            Our mission extends beyond fashion—we aim to build a community of discerning 
            individuals who appreciate the finer things in life and value quality over quantity.
          </p>
        </div>
      </section>

      {/* Values Section */}
      <section className="px-4 py-20">
        <div className="container mx-auto max-w-6xl">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-12 text-center">
            Our Values
          </h2>
          <div className="grid md:grid-cols-3 gap-12">
            <div className="text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">Craftsmanship</h3>
              <p className="text-muted-foreground">
                Every garment is meticulously crafted using traditional techniques 
                and modern innovation, ensuring exceptional quality in every stitch.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">Timeless Design</h3>
              <p className="text-muted-foreground">
                We create pieces that transcend fleeting trends, focusing on classic 
                silhouettes and elegant details that remain relevant season after season.
              </p>
            </div>
            <div className="text-center">
              <h3 className="font-serif text-2xl font-bold mb-4">Sustainability</h3>
              <p className="text-muted-foreground">
                We are committed to responsible sourcing and ethical production, 
                working with suppliers who share our values of quality and sustainability.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* Heritage Section */}
      <section className="px-4 py-20 luxury-gradient">
        <div className="container mx-auto max-w-4xl">
          <h2 className="font-serif text-4xl sm:text-5xl font-bold mb-8 text-center">
            Heritage & Craftsmanship
          </h2>
          <div className="space-y-6 text-lg leading-relaxed">
            <p>
              Founded by artisans with decades of experience in luxury fashion, Paschiago 
              combines traditional tailoring techniques with contemporary design sensibilities. 
              Our atelier is a space where creativity meets precision, where every piece is 
              treated with the care and attention it deserves.
            </p>
            <p className="text-muted-foreground">
              We work exclusively with the finest materials—premium wools, pure cashmere, 
              luxurious silks—sourced from renowned suppliers around the world. Each fabric 
              is carefully selected for its quality, texture, and durability.
            </p>
            <p className="text-muted-foreground">
              Our commitment to excellence is evident in every detail, from the precise cut 
              of a blazer to the delicate hand-stitching on an evening gown. This dedication 
              to craftsmanship ensures that every Paschiago piece is not just clothing, but 
              an investment in lasting style.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
};

export default About;
