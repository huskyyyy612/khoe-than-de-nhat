import { Button } from "@/components/ui/button";
import { Heart, Users, Award, Clock } from "lucide-react";
import heroImage from "@/assets/healthcare-hero.jpg";

const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center bg-gradient-hero">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-6xl font-bold text-foreground leading-tight">
                Chăm sóc sức khỏe
                <span className="text-primary block">Tận tâm & Chuyên nghiệp</span>
              </h1>
              <p className="text-lg md:text-xl text-muted-foreground max-w-2xl">
                Đội ngũ bác sĩ giàu kinh nghiệm, trang thiết bị hiện đại và dịch vụ y tế 
                chất lượng cao để bảo vệ sức khỏe của bạn và gia đình.
              </p>
            </div>

            {/* CTA Buttons */}
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="xl" variant="healthcare">
                Đặt lịch khám
                <Heart className="ml-2 h-5 w-5" />
              </Button>
              <Button size="xl" variant="outline">
                Tìm hiểu thêm
              </Button>
            </div>

            {/* Stats */}
            <div className="flex flex-wrap gap-8 pt-8">
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary-light">
                  <Users className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">10K+</div>
                  <div className="text-sm text-muted-foreground">Bệnh nhân</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary-light">
                  <Award className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">50+</div>
                  <div className="text-sm text-muted-foreground">Bác sĩ</div>
                </div>
              </div>
              
              <div className="flex items-center gap-3">
                <div className="p-2 rounded-full bg-primary-light">
                  <Clock className="h-6 w-6 text-primary" />
                </div>
                <div>
                  <div className="font-bold text-2xl text-foreground">24/7</div>
                  <div className="text-sm text-muted-foreground">Hỗ trợ</div>
                </div>
              </div>
            </div>
          </div>

          {/* Image */}
          <div className="relative animate-slide-up">
            <div className="relative rounded-2xl overflow-hidden shadow-soft">
              <img 
                src={heroImage} 
                alt="Healthcare professionals" 
                className="w-full h-auto object-cover"
              />
              <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
            </div>
            
            {/* Floating Card */}
            <div className="absolute -bottom-6 -left-6 bg-card p-6 rounded-xl shadow-card animate-float">
              <div className="flex items-center gap-4">
                <div className="p-3 rounded-full bg-health-light">
                  <Heart className="h-6 w-6 text-health-primary" />
                </div>
                <div>
                  <div className="font-semibold text-foreground">Tin cậy</div>
                  <div className="text-sm text-muted-foreground">15+ năm kinh nghiệm</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;