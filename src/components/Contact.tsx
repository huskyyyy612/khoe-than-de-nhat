import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { 
  MapPin, 
  Phone, 
  Mail, 
  Clock, 
  MessageSquare,
  Send
} from "lucide-react";

const Contact = () => {
  const contactInfo = [
    {
      icon: MapPin,
      title: "Địa chỉ",
      content: "123 Đường Nguyễn Du, Quận 1, TP.HCM",
      subContent: "Gần ngã tư Nguyễn Du - Hai Bà Trưng"
    },
    {
      icon: Phone,
      title: "Điện thoại",
      content: "(028) 3825 6789",
      subContent: "Hotline: 1900 1234 (24/7)"
    },
    {
      icon: Mail,
      title: "Email",
      content: "info@healthcare.vn",
      subContent: "support@healthcare.vn"
    },
    {
      icon: Clock,
      title: "Giờ làm việc",
      content: "T2 - T6: 7:30 - 17:30",
      subContent: "T7 - CN: 8:00 - 12:00"
    }
  ];

  return (
    <section className="py-20 bg-health-light">
      <div className="container mx-auto px-6 lg:px-8">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
            Liên hệ với
            <span className="text-primary block">Chúng tôi</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Đội ngũ tư vấn viên sẵn sàng hỗ trợ bạn 24/7. Hãy liên hệ để được tư vấn miễn phí.
          </p>
        </div>

        <div className="grid lg:grid-cols-3 gap-8">
          {/* Contact Info */}
          <div className="lg:col-span-1 space-y-6">
            {contactInfo.map((info, index) => (
              <Card 
                key={index} 
                className="group hover:shadow-card transition-all duration-300 animate-slide-up"
                style={{ animationDelay: `${index * 0.1}s` }}
              >
                <CardContent className="p-6">
                  <div className="flex items-start gap-4">
                    <div className="p-3 rounded-full bg-primary-light group-hover:bg-gradient-primary group-hover:text-white transition-all duration-300">
                      <info.icon className="h-5 w-5 text-primary group-hover:text-white" />
                    </div>
                    <div className="flex-1">
                      <h4 className="font-semibold text-foreground mb-1">
                        {info.title}
                      </h4>
                      <p className="text-foreground font-medium">
                        {info.content}
                      </p>
                      <p className="text-sm text-muted-foreground">
                        {info.subContent}
                      </p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          {/* Contact Form */}
          <div className="lg:col-span-2">
            <Card className="shadow-soft animate-fade-in">
              <CardHeader>
                <CardTitle className="flex items-center gap-2 text-xl">
                  <MessageSquare className="h-5 w-5 text-primary" />
                  Gửi tin nhắn cho chúng tôi
                </CardTitle>
              </CardHeader>
              <CardContent className="space-y-6">
                <div className="grid md:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Họ và tên *
                    </label>
                    <Input 
                      placeholder="Nhập họ và tên của bạn"
                      className="border-border focus:border-primary"
                    />
                  </div>
                  <div className="space-y-2">
                    <label className="text-sm font-medium text-foreground">
                      Số điện thoại *
                    </label>
                    <Input 
                      placeholder="Nhập số điện thoại"
                      className="border-border focus:border-primary"
                    />
                  </div>
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Email
                  </label>
                  <Input 
                    placeholder="Nhập địa chỉ email"
                    type="email"
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Dịch vụ quan tâm
                  </label>
                  <Input 
                    placeholder="Ví dụ: Khám tổng quát, Tim mạch..."
                    className="border-border focus:border-primary"
                  />
                </div>

                <div className="space-y-2">
                  <label className="text-sm font-medium text-foreground">
                    Tin nhắn *
                  </label>
                  <Textarea 
                    placeholder="Mô tả chi tiết về nhu cầu của bạn..."
                    rows={4}
                    className="border-border focus:border-primary resize-none"
                  />
                </div>

                <div className="flex flex-col sm:flex-row gap-4">
                  <Button size="lg" variant="healthcare" className="flex-1">
                    <Send className="mr-2 h-4 w-4" />
                    Gửi tin nhắn
                  </Button>
                  <Button size="lg" variant="outline" className="flex-1">
                    <Phone className="mr-2 h-4 w-4" />
                    Gọi ngay
                  </Button>
                </div>

                <p className="text-xs text-muted-foreground text-center">
                  * Thông tin bắt buộc. Chúng tôi cam kết bảo mật thông tin cá nhân của bạn.
                </p>
              </CardContent>
            </Card>
          </div>
        </div>

        {/* CTA Section */}
        <div className="mt-16 text-center">
          <Card className="bg-gradient-primary border-none text-white shadow-soft">
            <CardContent className="p-12">
              <h3 className="text-2xl md:text-3xl font-bold mb-4">
                Cần hỗ trợ khẩn cấp?
              </h3>
              <p className="text-lg mb-6 text-white/90">
                Đội ngũ y tế của chúng tôi sẵn sàng hỗ trợ bạn 24/7
              </p>
              <Button size="xl" variant="secondary">
                <Phone className="mr-2 h-5 w-5" />
                Gọi ngay: 1900 1234
              </Button>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Contact;