import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Users, 
  Award, 
  Heart, 
  Shield,
  CheckCircle,
  Star
} from "lucide-react";

const About = () => {
  const achievements = [
    { icon: Users, number: "10,000+", label: "Bệnh nhân tin tưởng" },
    { icon: Award, number: "50+", label: "Bác sĩ chuyên khoa" },
    { icon: Heart, number: "15+", label: "Năm kinh nghiệm" },
    { icon: Shield, number: "99.5%", label: "Tỷ lệ hài lòng" }
  ];

  const values = [
    {
      title: "Chuyên nghiệp",
      description: "Đội ngũ y bác sĩ được đào tạo bài bản, giàu kinh nghiệm"
    },
    {
      title: "Tận tâm",
      description: "Luôn đặt sức khỏe và lợi ích của bệnh nhân lên hàng đầu"
    },
    {
      title: "Hiện đại",
      description: "Trang thiết bị y tế hiện đại, công nghệ tiên tiến"
    },
    {
      title: "An toàn",
      description: "Quy trình khám chữa bệnh an toàn, tuân thủ tiêu chuẩn quốc tế"
    }
  ];

  return (
    <section className="py-20 bg-background">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Content */}
          <div className="space-y-8 animate-fade-in">
            <div className="space-y-4">
              <Badge variant="secondary" className="w-fit">
                Về chúng tôi
              </Badge>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">
                Đồng hành cùng 
                <span className="text-primary block">Sức khỏe của bạn</span>
              </h2>
              <p className="text-lg text-muted-foreground">
                Với hơn 15 năm kinh nghiệm trong lĩnh vực y tế, chúng tôi cam kết mang đến 
                dịch vụ chăm sóc sức khỏe chất lượng cao, an toàn và hiệu quả.
              </p>
            </div>

            {/* Values */}
            <div className="grid sm:grid-cols-2 gap-4">
              {values.map((value, index) => (
                <div key={index} className="flex items-start gap-3">
                  <CheckCircle className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                  <div>
                    <h4 className="font-semibold text-foreground">{value.title}</h4>
                    <p className="text-sm text-muted-foreground">{value.description}</p>
                  </div>
                </div>
              ))}
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" variant="healthcare">
                Liên hệ tư vấn
              </Button>
              <Button size="lg" variant="outline">
                Tìm hiểu thêm
              </Button>
            </div>
          </div>

          {/* Stats Cards */}
          <div className="grid grid-cols-2 gap-6 animate-slide-up">
            {achievements.map((achievement, index) => (
              <Card 
                key={index} 
                className="text-center p-6 hover:shadow-card transition-all duration-300 group"
              >
                <CardContent className="space-y-4">
                  <div className="mx-auto w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                    <achievement.icon className="h-8 w-8 text-white" />
                  </div>
                  <div>
                    <div className="text-2xl md:text-3xl font-bold text-foreground mb-1">
                      {achievement.number}
                    </div>
                    <div className="text-sm text-muted-foreground">
                      {achievement.label}
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>

        {/* Mission Statement */}
        <div className="mt-20 text-center">
          <Card className="bg-gradient-secondary border-none shadow-soft">
            <CardContent className="p-12">
              <Star className="h-12 w-12 text-primary mx-auto mb-6" />
              <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-4">
                Sứ mệnh của chúng tôi
              </h3>
              <p className="text-lg text-muted-foreground max-w-3xl mx-auto">
                "Chúng tôi cam kết mang đến dịch vụ y tế chất lượng cao, an toàn và nhân văn. 
                Mỗi bệnh nhân đều được chăm sóc tận tình như người thân trong gia đình, 
                với sự tôn trọng và quan tâm chân thành nhất."
              </p>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default About;