import { motion } from "motion/react";
import { Leaf, Sparkles, Recycle, FlaskConical, Heart, Award } from "lucide-react";
import logoImage from "../imports/Gemini_Generated_Image_jx8ut4jx8ut4jx8u.png";
import productImage from "../imports/Gemini_Generated_Image_stcubvstcubvstcu.png";

export default function App() {
  const scrollToSection = (id: string) => {
    document.getElementById(id)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <div className="w-full bg-[#F5ECD7] overflow-x-hidden" style={{ fontFamily: 'Inter, sans-serif' }}>
      {/* Hero Section */}
      <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Background Decorative Elements */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-20 left-10 w-96 h-96 bg-[#4A6741] rounded-full blur-3xl" />
          <div className="absolute bottom-20 right-10 w-96 h-96 bg-[#C9A96E] rounded-full blur-3xl" />
        </div>

        <div className="relative z-10 max-w-7xl mx-auto px-6 lg:px-12 grid lg:grid-cols-2 gap-12 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8 }}
          >
            <motion.img
              src={logoImage}
              alt="Lourea Logo"
              className="w-32 mb-8"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
            />
            <h1 className="mb-6" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(3rem, 8vw, 7rem)',
              fontWeight: 300,
              lineHeight: 0.9,
              color: '#4A6741',
              letterSpacing: '-0.02em'
            }}>
              LOUREA
            </h1>
            <p className="text-2xl md:text-3xl mb-4" style={{
              fontFamily: 'Cormorant Garamond, serif',
              color: '#C9A96E',
              fontStyle: 'italic'
            }}>
              From Tofu to Glow
            </p>
            <p className="text-lg md:text-xl text-[#4A6741]/80 mb-8 max-w-lg">
              Transform your skin with science-backed exfoliation.
              Premium natural body scrub crafted from upcycled tofu waste and white turmeric.
            </p>
            <motion.button
              onClick={() => scrollToSection('pricing')}
              className="px-10 py-4 bg-[#4A6741] text-[#F5ECD7] rounded-full hover:bg-[#C9A96E] transition-colors duration-300"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              style={{ fontWeight: 500, letterSpacing: '0.5px' }}
            >
              Discover Lourea
            </motion.button>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img src={productImage} alt="Lourea Body Scrub" className="w-full h-auto" />
              <div className="absolute inset-0 bg-gradient-to-t from-[#4A6741]/20 to-transparent" />
            </div>
          </motion.div>
        </div>

        {/* Scroll Indicator */}
        <motion.div
          className="absolute bottom-12 left-1/2 -translate-x-1/2"
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
        >
          <div className="w-6 h-10 border-2 border-[#4A6741] rounded-full flex justify-center p-1">
            <div className="w-1 h-3 bg-[#4A6741] rounded-full" />
          </div>
        </motion.div>
      </section>

      {/* The Problem Section */}
      <section id="problem" className="py-24 bg-gradient-to-b from-[#F5ECD7] to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#4A6741',
              fontWeight: 400
            }}>
              A Problem Worth Solving
            </h2>
            <div className="w-24 h-1 bg-[#C9A96E] mx-auto mb-8" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12 items-center">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-3xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#4A6741]/10 rounded-full flex items-center justify-center">
                  <Recycle className="w-8 h-8 text-[#4A6741]" />
                </div>
                <h3 className="text-3xl" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A6741' }}>
                  Environmental Crisis
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                <span style={{ fontWeight: 600, color: '#C9A96E' }}>10 tons per day</span> of tofu waste
                discarded in Malang alone. This organic material ends up in landfills, contributing to
                methane emissions and environmental degradation.
              </p>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="bg-white p-10 rounded-3xl shadow-lg"
            >
              <div className="flex items-center gap-4 mb-6">
                <div className="w-16 h-16 bg-[#C9A96E]/10 rounded-full flex items-center justify-center">
                  <Sparkles className="w-8 h-8 text-[#C9A96E]" />
                </div>
                <h3 className="text-3xl" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A6741' }}>
                  Beauty Dilemma
                </h3>
              </div>
              <p className="text-lg text-gray-700 leading-relaxed">
                Gen Z women (ages 15-25) struggle with dull, rough skin but are <span style={{ fontWeight: 600, color: '#C9A96E' }}>
                unwilling to compromise</span> on harsh chemicals or unsustainable beauty products.
              </p>
            </motion.div>
          </div>
        </div>
      </section>

      {/* The Solution Section */}
      <section id="solution" className="py-24 bg-gradient-to-b from-white to-[#F5ECD7]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#4A6741',
              fontWeight: 400
            }}>
              The Lourea Solution
            </h2>
            <div className="w-24 h-1 bg-[#C9A96E] mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-3xl mx-auto leading-relaxed">
              We transform tofu waste into a luxurious, science-validated exfoliating scrub
              that reveals radiant skin while solving an environmental problem.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 mb-16">
            {[
              {
                icon: "🥛",
                title: "Tofu Dregs",
                desc: "Rich in amino acids and gentle exfoliating particles that remove dead skin cells without irritation"
              },
              {
                icon: "🌿",
                title: "White Turmeric",
                desc: "Natural brightening agent with anti-inflammatory properties, scientifically proven to even skin tone"
              },
              {
                icon: "✨",
                title: "Synergistic Formula",
                desc: "Developed in MAN 2 research lab, validated by pharmaceutical experts for optimal efficacy"
              }
            ].map((item, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl transition-shadow"
              >
                <div className="text-5xl mb-4">{item.icon}</div>
                <h4 className="text-2xl mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A6741' }}>
                  {item.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{item.desc}</p>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
            className="bg-gradient-to-r from-[#4A6741] to-[#C9A96E] p-12 rounded-3xl text-white text-center"
          >
            <h3 className="text-3xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              How It Works
            </h3>
            <p className="text-lg max-w-3xl mx-auto opacity-90 leading-relaxed">
              The gentle exfoliating action of tofu dregs removes dead skin cells, while white turmeric's
              curcuminoids penetrate to brighten and even skin tone. Regular use reveals smoother,
              more radiant skin in just 2-3 weeks.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Value Proposition Section */}
      <section id="values" className="py-24 bg-[#F5ECD7]">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#4A6741',
              fontWeight: 400
            }}>
              Why Choose Lourea
            </h2>
            <div className="w-24 h-1 bg-[#C9A96E] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
            {[
              {
                icon: <Recycle className="w-10 h-10" />,
                title: "Waste to Wealth",
                desc: "Every jar prevents 200g of tofu waste from reaching landfills. Beauty with purpose."
              },
              {
                icon: <FlaskConical className="w-10 h-10" />,
                title: "Dermatologist-Tested",
                desc: "Validated in collaboration with ERHA dermatologists. Safe for sensitive skin."
              },
              {
                icon: <Leaf className="w-10 h-10" />,
                title: "Local & Sustainable",
                desc: "100% Indonesian ingredients. Zero import carbon footprint. Supporting local farmers."
              },
              {
                icon: <Heart className="w-10 h-10" />,
                title: "Affordable Premium",
                desc: "Luxury quality at Rp 49,000. Accessible clean beauty for everyone."
              }
            ].map((value, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-8 rounded-2xl shadow-lg hover:shadow-2xl transition-all hover:-translate-y-2"
              >
                <div className="w-16 h-16 bg-[#4A6741]/10 rounded-full flex items-center justify-center mb-6 text-[#4A6741]">
                  {value.icon}
                </div>
                <h4 className="text-2xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A6741' }}>
                  {value.title}
                </h4>
                <p className="text-gray-600 leading-relaxed">{value.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* How It's Made Section */}
      <section id="process" className="py-24 bg-gradient-to-b from-[#F5ECD7] to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#4A6741',
              fontWeight: 400
            }}>
              From Waste to Wonder
            </h2>
            <div className="w-24 h-1 bg-[#C9A96E] mx-auto mb-8" />
          </motion.div>

          <div className="relative">
            {/* Connection Line */}
            <div className="absolute top-1/2 left-0 w-full h-0.5 bg-[#C9A96E]/30 hidden lg:block" />

            <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 relative">
              {[
                { step: "01", title: "Source", desc: "Collect fresh tofu dregs from local Malang tofu factories" },
                { step: "02", title: "Research", desc: "Formulate in MAN 2 Kota Malang advanced research laboratory" },
                { step: "03", title: "Validate", desc: "Clinical testing by pharmaceutical consultant & ERHA dermatologists" },
                { step: "04", title: "Deliver", desc: "Premium packaging meets your glowing skin" }
              ].map((process, idx) => (
                <motion.div
                  key={idx}
                  initial={{ opacity: 0, scale: 0.8 }}
                  whileInView={{ opacity: 1, scale: 1 }}
                  viewport={{ once: true }}
                  transition={{ duration: 0.5, delay: idx * 0.15 }}
                  className="relative bg-white p-8 rounded-2xl shadow-md text-center"
                >
                  <div className="w-16 h-16 bg-gradient-to-br from-[#4A6741] to-[#C9A96E] rounded-full flex items-center justify-center mx-auto mb-4 relative z-10">
                    <span className="text-2xl text-white" style={{ fontFamily: 'Cormorant Garamond, serif', fontWeight: 600 }}>
                      {process.step}
                    </span>
                  </div>
                  <h4 className="text-2xl mb-3" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A6741' }}>
                    {process.title}
                  </h4>
                  <p className="text-gray-600 leading-relaxed">{process.desc}</p>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Target Market Section */}
      <section id="market" className="py-24 bg-gradient-to-b from-white to-[#F5ECD7]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#4A6741',
              fontWeight: 400
            }}>
              Made For You
            </h2>
            <div className="w-24 h-1 bg-[#C9A96E] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8">
            {[
              {
                title: "Gen Z Women",
                age: "15-25 Years",
                desc: "Conscious consumers seeking effective, sustainable beauty solutions without compromising on quality or ethics."
              },
              {
                title: "Eco-Warriors",
                age: "All Ages",
                desc: "Anyone committed to circular economy principles and reducing their environmental footprint through daily choices."
              },
              {
                title: "Green Businesses",
                age: "B2B Partners",
                desc: "Spas, wellness centers, and eco-concept stores looking to offer sustainable, locally-sourced skincare."
              }
            ].map((market, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className="bg-white p-10 rounded-3xl shadow-lg text-center hover:shadow-2xl transition-shadow"
              >
                <h4 className="text-3xl mb-2" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A6741' }}>
                  {market.title}
                </h4>
                <p className="text-[#C9A96E] mb-4" style={{ fontWeight: 500 }}>
                  {market.age}
                </p>
                <p className="text-gray-600 leading-relaxed">{market.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Social Proof Section */}
      <section id="credibility" className="py-24 bg-[#F5ECD7]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#4A6741',
              fontWeight: 400
            }}>
              Backed by Science & Excellence
            </h2>
            <div className="w-24 h-1 bg-[#C9A96E] mx-auto" />
          </motion.div>

          <div className="grid md:grid-cols-2 gap-12">
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-3xl shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <Award className="w-12 h-12 text-[#C9A96E]" />
                <h3 className="text-3xl" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A6741' }}>
                  Award Recognition
                </h3>
              </div>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A96E] mt-1">•</span>
                  <span><strong>Venturistic 2.0 Semifinalist</strong> — National Green Economy Business Competition</span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#C9A96E] mt-1">•</span>
                  <span>Developed at <strong>MAN 2 Kota Malang</strong> Research Laboratory</span>
                </li>
              </ul>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
              className="bg-white p-10 rounded-3xl shadow-xl"
            >
              <div className="flex items-center gap-4 mb-6">
                <FlaskConical className="w-12 h-12 text-[#4A6741]" />
                <h3 className="text-3xl" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A6741' }}>
                  Expert Validation
                </h3>
              </div>
              <ul className="space-y-4 text-lg text-gray-700">
                <li className="flex items-start gap-3">
                  <span className="text-[#4A6741] mt-1">•</span>
                  <span>Formula validated by <strong>certified pharmaceutical consultant</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4A6741] mt-1">•</span>
                  <span>Dermatologist collaboration with <strong>ERHA Clinic</strong></span>
                </li>
                <li className="flex items-start gap-3">
                  <span className="text-[#4A6741] mt-1">•</span>
                  <span>Clinically tested for <strong>safety and efficacy</strong></span>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Pricing Section */}
      <section id="pricing" className="py-24 bg-gradient-to-b from-[#F5ECD7] to-white">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="text-center mb-16"
          >
            <h2 className="mb-6" style={{
              fontFamily: 'Cormorant Garamond, serif',
              fontSize: 'clamp(2.5rem, 5vw, 4.5rem)',
              color: '#4A6741',
              fontWeight: 400
            }}>
              Accessible Luxury
            </h2>
            <div className="w-24 h-1 bg-[#C9A96E] mx-auto mb-8" />
            <p className="text-xl text-gray-700 max-w-2xl mx-auto">
              Premium quality that doesn't break the bank. Join the circular beauty revolution.
            </p>
          </motion.div>

          <div className="grid md:grid-cols-3 gap-8 max-w-5xl mx-auto">
            {[
              {
                name: "Single Jar",
                price: "Rp 49,000",
                features: [
                  "200g premium body scrub",
                  "1-month supply",
                  "Glass jar packaging",
                  "Perfect for first-timers"
                ]
              },
              {
                name: "Refill Membership",
                price: "Rp 39,000",
                popular: true,
                features: [
                  "20% discount per refill",
                  "Eco-friendly packaging",
                  "Monthly subscription",
                  "Cancel anytime"
                ]
              },
              {
                name: "Gift Set",
                price: "Rp 135,000",
                features: [
                  "3 jars (600g total)",
                  "Premium gift packaging",
                  "Perfect for sharing",
                  "Best value"
                ]
              }
            ].map((plan, idx) => (
              <motion.div
                key={idx}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: idx * 0.1 }}
                className={`bg-white p-8 rounded-3xl shadow-lg relative ${
                  plan.popular ? 'ring-4 ring-[#C9A96E] scale-105' : ''
                }`}
              >
                {plan.popular && (
                  <div className="absolute -top-4 left-1/2 -translate-x-1/2 bg-[#C9A96E] text-white px-6 py-2 rounded-full text-sm font-medium">
                    Most Popular
                  </div>
                )}
                <h4 className="text-2xl mb-4 text-center" style={{ fontFamily: 'Cormorant Garamond, serif', color: '#4A6741' }}>
                  {plan.name}
                </h4>
                <p className="text-4xl text-center mb-6" style={{
                  fontFamily: 'Cormorant Garamond, serif',
                  color: '#C9A96E',
                  fontWeight: 600
                }}>
                  {plan.price}
                </p>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-center gap-3 text-gray-700">
                      <div className="w-5 h-5 rounded-full bg-[#4A6741]/10 flex items-center justify-center flex-shrink-0">
                        <div className="w-2 h-2 rounded-full bg-[#4A6741]" />
                      </div>
                      {feature}
                    </li>
                  ))}
                </ul>
                <button className={`w-full py-3 rounded-full transition-colors ${
                  plan.popular
                    ? 'bg-[#C9A96E] text-white hover:bg-[#4A6741]'
                    : 'bg-[#4A6741]/10 text-[#4A6741] hover:bg-[#4A6741] hover:text-white'
                }`}>
                  Order Now
                </button>
              </motion.div>
            ))}
          </div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.4 }}
            className="mt-16 bg-gradient-to-r from-[#4A6741] to-[#C9A96E] p-10 rounded-3xl text-white text-center"
          >
            <h3 className="text-3xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
              Scaling for Impact
            </h3>
            <p className="text-lg max-w-3xl mx-auto opacity-90 leading-relaxed">
              Target: <strong>1,000 units per month</strong> — transforming 200kg of tofu waste monthly
              while empowering local communities and democratizing access to sustainable beauty.
            </p>
          </motion.div>
        </div>
      </section>

      {/* Footer */}
      <footer className="bg-[#4A6741] text-white py-16">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <div className="grid md:grid-cols-3 gap-12 mb-12">
            <div>
              <img src={logoImage} alt="Lourea" className="w-24 mb-4 brightness-0 invert" />
              <p className="text-white/80 leading-relaxed">
                Transforming waste into radiant skin. Powered by science, driven by sustainability.
              </p>
            </div>
            <div>
              <h4 className="text-xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Our Team
              </h4>
              <p className="text-white/80">
                <strong>APRIL Mop</strong><br />
                Student Researchers<br />
                MAN 2 Kota Malang
              </p>
            </div>
            <div>
              <h4 className="text-xl mb-4" style={{ fontFamily: 'Cormorant Garamond, serif' }}>
                Recognition
              </h4>
              <p className="text-white/80">
                <strong>Venturistic 2.0</strong><br />
                National Green Economy<br />
                Business Competition Semifinalist
              </p>
            </div>
          </div>
          <div className="border-t border-white/20 pt-8 text-center text-white/60">
            <p>© 2026 Lourea by APRIL Mop. Crafted with passion for people and planet.</p>
          </div>
        </div>
      </footer>
    </div>
  );
}
