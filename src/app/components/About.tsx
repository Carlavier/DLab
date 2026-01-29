import { ImageWithFallback } from "@/app/components/figma/ImageWithFallback";
import { Award, Users, Globe } from "lucide-react";

export default function About() {
  return (
    <section id="about" className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="order-2 lg:order-1">
            <div className="rounded-3xl overflow-hidden shadow-xl">
              <ImageWithFallback
                src="https://images.unsplash.com/photo-1650820597435-c1d6d6cbbcfa?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxWaWV0bmFtJTIwY3VsdHVyZSUyMHRyYWRpdGlvbmFsfGVufDF8fHx8MTc2OTUwNDM0Mnww&ixlib=rb-4.1.0&q=80&w=1080&utm_source=figma&utm_medium=referral"
                alt="Vietnam Culture"
                className="w-full h-[400px] object-cover"
              />
            </div>
          </div>
          <div className="order-1 lg:order-2">
            <h2 className="text-4xl mb-6 text-slate-900">
              Bridging Tradition & Innovation
            </h2>
            <p className="text-lg text-slate-600 mb-6 leading-relaxed">
              At VietAI Lab, we believe in the power of combining Vietnam's rich cultural heritage with cutting-edge technology. Located in the vibrant coastal city of Da Nang, we are at the forefront of blockchain and artificial intelligence research.
            </p>
            <p className="text-lg text-slate-600 mb-8 leading-relaxed">
              Our mission is to create technology solutions that honor our past while building the future, making advanced technology accessible and beneficial for the Vietnamese community and beyond.
            </p>
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-6">
              <div className="text-center p-4 bg-blue-50 rounded-xl">
                <Award className="w-8 h-8 text-blue-600 mx-auto mb-2" />
                <div className="text-2xl mb-1">50+</div>
                <div className="text-sm text-slate-600">Projects</div>
              </div>
              <div className="text-center p-4 bg-purple-50 rounded-xl">
                <Users className="w-8 h-8 text-purple-600 mx-auto mb-2" />
                <div className="text-2xl mb-1">30+</div>
                <div className="text-sm text-slate-600">Researchers</div>
              </div>
              <div className="text-center p-4 bg-green-50 rounded-xl">
                <Globe className="w-8 h-8 text-green-600 mx-auto mb-2" />
                <div className="text-2xl mb-1">10+</div>
                <div className="text-sm text-slate-600">Partners</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
