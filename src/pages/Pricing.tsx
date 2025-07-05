import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  Check, 
  Star, 
  Heart,
  Shield,
  Clock,
  Phone,
  Calendar,
  FileText
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const pricingPlans = [
  {
    id: 1,
    name: "Khám cơ bản",
    price: "200,000₫",
    period: "/lần khám",
    description: "Gói khám sức khỏe cơ bản phù hợp cho việc kiểm tra định kỳ",
    features: [
      "Khám lâm sàng tổng quát",
      "Đo huyết áp, nhịp tim",
      "Kiểm tra thị lực cơ bản",
      "Tư vấn sức khỏe",
      "Kê đơn thuốc (nếu cần)"
    ],
    recommended: false,
    color: "default"
  },
  {
    id: 2,
    name: "Khám toàn diện",
    price: "500,000₫",
    period: "/gói khám",
    description: "Gói khám sức khỏe toàn diện với các xét nghiệm cơ bản",
    features: [
      "Tất cả dịch vụ gói Cơ bản",
      "Xét nghiệm máu tổng quát",
      "Xét nghiệm nước tiểu",
      "Chụp X-quang phổi",
      "Siêu âm bụng tổng quát",
      "Điện tâm đồ",
      "Tư vấn dinh dưỡng"
    ],
    recommended: true,
    color: "primary"
  },
  {
    id: 3,
    name: "Khám VIP",
    price: "1,200,000₫",
    period: "/gói khám",
    description: "Gói khám cao cấp với dịch vụ chăm sóc đặc biệt",
    features: [
      "Tất cả dịch vụ gói Toàn diện",
      "Khám với bác sĩ chuyên khoa II",
      "CT Scanner hoặc MRI",
      "Xét nghiệm ung thư",
      "Khám mắt chuyên sâu",
      "Tư vấn 1-1 với chuyên gia",
      "Hỗ trợ ưu tiên 24/7",
      "Phòng khám riêng biệt"
    ],
    recommended: false,
    color: "secondary"
  }
];

const specialtyPricing = [
  {
    category: "Chuyên khoa Tim mạch",
    services: [
      { name: "Khám tim mạch", price: "150,000₫" },
      { name: "Siêu âm tim", price: "300,000₫" },
      { name: "Điện tâm đồ", price: "50,000₫" },
      { name: "Holter 24h", price: "500,000₫" }
    ]
  },
  {
    category: "Chuyên khoa Mắt",
    services: [
      { name: "Khám mắt tổng quát", price: "100,000₫" },
      { name: "Đo thị lực", price: "30,000₫" },
      { name: "Đo nhãn áp", price: "50,000₫" },
      { name: "Chụp OCT", price: "200,000₫" }
    ]
  },
  {
    category: "Sản phụ khoa",
    services: [
      { name: "Khám sản phụ khoa", price: "120,000₫" },
      { name: "Siêu âm thai", price: "150,000₫" },
      { name: "Siêu âm 4D", price: "300,000₫" },
      { name: "Xét nghiệm NIPT", price: "3,500,000₫" }
    ]
  },
  {
    category: "Chuyên khoa Nhi",
    services: [
      { name: "Khám nhi tổng quát", price: "80,000₫" },
      { name: "Tiêm phòng", price: "100,000₫" },
      { name: "Theo dõi phát triển", price: "120,000₫" },
      { name: "Tư vấn dinh dưỡng", price: "150,000₫" }
    ]
  }
];

const benefits = [
  {
    icon: Shield,
    title: "Bảo hiểm y tế",
    description: "Chấp nhận tất cả loại thẻ bảo hiểm"
  },
  {
    icon: Clock,
    title: "Không chờ đợi",
    description: "Đặt lịch trước, khám đúng giờ"
  },
  {
    icon: Phone,
    title: "Hỗ trợ 24/7",
    description: "Tư vấn y tế qua điện thoại"
  },
  {
    icon: FileText,
    title: "Kết quả nhanh",
    description: "Nhận kết quả trong ngày"
  }
];

const Pricing = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Bảng giá
              <span className="text-primary block">Dịch vụ y tế</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chi phí minh bạch, chất lượng dịch vụ cao với các gói khám phù hợp cho mọi nhu cầu
            </p>
          </div>
        </div>
      </section>

      {/* Benefits */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {benefits.map((benefit, index) => (
              <div key={index} className="flex items-center gap-4 p-4 rounded-lg bg-health-light">
                <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center">
                  <benefit.icon className="h-6 w-6 text-white" />
                </div>
                <div>
                  <h3 className="font-semibold text-foreground">{benefit.title}</h3>
                  <p className="text-sm text-muted-foreground">{benefit.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Pricing Plans */}
      <section className="py-20 bg-health-light">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Gói khám sức khỏe
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Lựa chọn gói khám phù hợp với nhu cầu và ngân sách của bạn
            </p>
          </div>

          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {pricingPlans.map((plan) => (
              <Card 
                key={plan.id} 
                className={`relative hover:shadow-soft transition-all duration-300 hover:-translate-y-2 ${
                  plan.recommended ? 'ring-2 ring-primary scale-105' : ''
                }`}
              >
                {plan.recommended && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <Badge className="bg-primary text-white px-4 py-1">
                      <Star className="w-4 h-4 mr-1" />
                      Được đề xuất
                    </Badge>
                  </div>
                )}
                
                <CardHeader className="text-center">
                  <CardTitle className="text-2xl font-bold text-foreground">
                    {plan.name}
                  </CardTitle>
                  <div className="my-4">
                    <span className="text-4xl font-bold text-primary">{plan.price}</span>
                    <span className="text-muted-foreground">{plan.period}</span>
                  </div>
                  <CardDescription className="text-center">
                    {plan.description}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-6">
                  <ul className="space-y-3">
                    {plan.features.map((feature, index) => (
                      <li key={index} className="flex items-center gap-3">
                        <Check className="h-5 w-5 text-primary flex-shrink-0" />
                        <span className="text-sm text-foreground">{feature}</span>
                      </li>
                    ))}
                  </ul>
                  
                  <Button 
                    variant={plan.recommended ? "healthcare" : "outline"} 
                    className="w-full"
                    size="lg"
                  >
                    <Calendar className="mr-2 h-5 w-5" />
                    Đặt lịch khám
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Specialty Pricing */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-16">
            <h2 className="text-3xl md:text-4xl font-bold text-foreground mb-4">
              Bảng giá theo chuyên khoa
            </h2>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Chi phí cụ thể for các dịch vụ theo từng chuyên khoa
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {specialtyPricing.map((specialty, index) => (
              <Card key={index} className="hover:shadow-card transition-all duration-300">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <Heart className="h-5 w-5 text-primary" />
                    {specialty.category}
                  </CardTitle>
                </CardHeader>
                <CardContent>
                  <div className="space-y-3">
                    {specialty.services.map((service, serviceIndex) => (
                      <div key={serviceIndex} className="flex justify-between items-center py-2 border-b border-border last:border-b-0">
                        <span className="text-foreground">{service.name}</span>
                        <span className="font-semibold text-primary">{service.price}</span>
                      </div>
                    ))}
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Insurance & Payment Info */}
      <section className="py-16 bg-health-light">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="bg-gradient-secondary border-none shadow-soft">
            <CardContent className="p-12">
              <div className="grid md:grid-cols-2 gap-8 items-center">
                <div>
                  <h3 className="text-2xl font-bold text-foreground mb-4">
                    Thông tin thanh toán & Bảo hiểm
                  </h3>
                  <ul className="space-y-3">
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Chấp nhận thẻ bảo hiểm y tế</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Thanh toán tiền mặt, thẻ ATM</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Chuyển khoản ngân hàng</span>
                    </li>
                    <li className="flex items-center gap-3">
                      <Check className="h-5 w-5 text-primary" />
                      <span>Trả góp qua thẻ tín dụng</span>
                    </li>
                  </ul>
                </div>
                
                <div className="text-center">
                  <div className="text-6xl mb-4">💳</div>
                  <p className="text-muted-foreground mb-6">
                    Liên hệ với chúng tôi để được tư vấn về các phương thức thanh toán 
                    và quyền lợi bảo hiểm y tế.
                  </p>
                  <Button size="lg" variant="healthcare">
                    <Phone className="mr-2 h-5 w-5" />
                    Tư vấn ngay: 1900 1234
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Pricing;