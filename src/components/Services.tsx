import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { 
  Stethoscope, 
  Heart, 
  Brain, 
  Baby, 
  Eye, 
  Pill,
  ArrowRight
} from "lucide-react";

const services = [
  {
    icon: Stethoscope,
    title: "Khám tổng quát",
    description: "Khám sức khỏe định kỳ và tư vấn y tế toàn diện với đội ngũ bác sĩ giàu kinh nghiệm.",
    features: ["Khám lâm sàng", "Xét nghiệm", "Tư vấn sức khỏe"]
  },
  {
    icon: Heart,
    title: "Tim mạch",
    description: "Chẩn đoán và điều trị các bệnh lý tim mạch với trang thiết bị hiện đại nhất.",
    features: ["Siêu âm tim", "Điện tâm đồ", "Holter 24h"]
  },
  {
    icon: Brain,
    title: "Thần kinh",
    description: "Điều trị các rối loạn thần kinh và tâm lý với phương pháp tiên tiến.",
    features: ["MRI não", "Điện não đồ", "Tư vấn tâm lý"]
  },
  {
    icon: Baby,
    title: "Sản phụ khoa",
    description: "Chăm sóc sức khỏe sinh sản và thai sản an toàn, chuyên nghiệp.",
    features: ["Siêu âm 4D", "Khám thai", "Tư vấn dinh dưỡng"]
  },
  {
    icon: Eye,
    title: "Mắt",
    description: "Khám và điều trị các bệnh lý về mắt với công nghệ laser hiện đại.",
    features: ["Khám tật khúc xạ", "Phẫu thuật", "Điều trị võng mạc"]
  },
  {
    icon: Pill,
    title: "Dược lâm sàng",
    description: "Tư vấn dùng thuốc an toàn và hiệu quả cho từng bệnh nhân.",
    features: ["Tư vấn thuốc", "Tương tác thuốc", "Theo dõi điều trị"]
  }
];

const Services = () => {
  return (
    <section className="py-20 bg-health-light">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Dịch vụ y tế
            <span className="text-primary block">Chuyên nghiệp</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Chúng tôi cung cấp đầy đủ các dịch vụ y tế từ khám chữa bệnh đến chăm sóc sức khỏe dự phòng
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {services.map((service, index) => (
            <Card 
              key={index} 
              className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2 bg-card border-border animate-slide-up"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <CardHeader className="text-center">
                <div className="mx-auto mb-4 p-4 rounded-full bg-primary-light group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300">
                  <service.icon className="h-8 w-8 text-primary group-hover:text-white" />
                </div>
                <CardTitle className="text-xl font-semibold text-foreground">
                  {service.title}
                </CardTitle>
              </CardHeader>
              
              <CardContent className="space-y-4">
                <CardDescription className="text-muted-foreground">
                  {service.description}
                </CardDescription>
                
                <ul className="space-y-2">
                  {service.features.map((feature, idx) => (
                    <li key={idx} className="flex items-center gap-2 text-sm text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full"></div>
                      {feature}
                    </li>
                  ))}
                </ul>
                
                <Button 
                  variant="ghost" 
                  className="w-full group-hover:bg-primary-light group-hover:text-primary transition-colors"
                >
                  Xem chi tiết
                  <ArrowRight className="ml-2 h-4 w-4" />
                </Button>
              </CardContent>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <Button size="lg" variant="healthcare">
            Xem tất cả dịch vụ
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Services;