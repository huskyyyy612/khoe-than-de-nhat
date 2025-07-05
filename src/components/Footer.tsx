import { Heart, MapPin, Phone, Mail, Clock, Facebook, Instagram, Youtube } from "lucide-react";
import { Button } from "@/components/ui/button";

const Footer = () => {
  const services = [
    "Khám tổng quát",
    "Tim mạch",
    "Thần kinh",
    "Sản phụ khoa",
    "Mắt",
    "Dược lâm sàng"
  ];

  const quickLinks = [
    "Về chúng tôi",
    "Dịch vụ",
    "Đội ngũ bác sĩ",
    "Tin tức",
    "Liên hệ",
    "Đặt lịch khám"
  ];

  return (
    <footer className="bg-foreground text-white">
      <div className="container mx-auto px-6 lg:px-8 py-16">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Company Info */}
          <div className="space-y-6">
            <div className="flex items-center gap-2">
              <div className="p-2 rounded-full bg-gradient-primary">
                <Heart className="h-6 w-6 text-white" />
              </div>
              <span className="text-xl font-bold">
                Health<span className="text-primary">Care</span>
              </span>
            </div>
            
            <p className="text-white/80 leading-relaxed">
              Chúng tôi cam kết mang đến dịch vụ y tế chất lượng cao, 
              an toàn và nhân văn cho mọi bệnh nhân.
            </p>

            <div className="flex gap-4">
              <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-white">
                <Facebook className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-white">
                <Instagram className="h-5 w-5" />
              </Button>
              <Button size="icon" variant="ghost" className="hover:bg-primary hover:text-white">
                <Youtube className="h-5 w-5" />
              </Button>
            </div>
          </div>

          {/* Services */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Dịch vụ</h3>
            <ul className="space-y-3">
              {services.map((service, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-primary transition-colors duration-200"
                  >
                    {service}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Liên kết nhanh</h3>
            <ul className="space-y-3">
              {quickLinks.map((link, index) => (
                <li key={index}>
                  <a 
                    href="#" 
                    className="text-white/80 hover:text-primary transition-colors duration-200"
                  >
                    {link}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div className="space-y-6">
            <h3 className="text-lg font-semibold">Thông tin liên hệ</h3>
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <MapPin className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <p>123 Đường Nguyễn Du</p>
                  <p>Quận 1, TP.HCM</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Phone className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-white/80">
                  <p>(028) 3825 6789</p>
                  <p className="text-sm">Hotline: 1900 1234</p>
                </div>
              </div>

              <div className="flex items-center gap-3">
                <Mail className="h-5 w-5 text-primary flex-shrink-0" />
                <div className="text-white/80">
                  <p>info@healthcare.vn</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Clock className="h-5 w-5 text-primary mt-1 flex-shrink-0" />
                <div className="text-white/80">
                  <p>T2 - T6: 7:30 - 17:30</p>
                  <p>T7 - CN: 8:00 - 12:00</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-white/20 mt-12 pt-8">
          <div className="flex flex-col md:flex-row justify-between items-center gap-4">
            <p className="text-white/60 text-sm">
              © 2024 HealthCare. Tất cả quyền được bảo lưu.
            </p>
            <div className="flex gap-6 text-sm">
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                Chính sách bảo mật
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                Điều khoản sử dụng
              </a>
              <a href="#" className="text-white/60 hover:text-primary transition-colors">
                Sitemap
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;