import { 
  Accordion, 
  AccordionContent, 
  AccordionItem, 
  AccordionTrigger 
} from "@/components/ui/accordion";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  HelpCircle, 
  Phone, 
  Mail, 
  Clock,
  MapPin,
  CreditCard,
  FileText,
  Users,
  Calendar
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const faqCategories = [
  {
    id: "general",
    title: "Câu hỏi chung",
    icon: HelpCircle,
    questions: [
      {
        question: "Bệnh viện có những chuyên khoa nào?",
        answer: "Chúng tôi có đầy đủ các chuyên khoa: Khám tổng quát, Tim mạch, Thần kinh, Sản phụ khoa, Nhi khoa, Mắt, Da liễu, Răng hàm mặt, và nhiều chuyên khoa khác."
      },
      {
        question: "Giờ làm việc của bệnh viện như thế nào?",
        answer: "Thứ 2 - Thứ 6: 7:30 - 17:30. Thứ 7 - Chủ nhật: 8:00 - 12:00. Cấp cứu 24/7."
      },
      {
        question: "Làm thế nào để liên hệ với bệnh viện?",
        answer: "Bạn có thể liên hệ qua Hotline: 1900 1234, Email: info@healthcare.vn hoặc đến trực tiếp tại 123 Đường Nguyễn Du, Quận 1, TP.HCM."
      }
    ]
  },
  {
    id: "appointment",
    title: "Đặt lịch hẹn",
    icon: Calendar,
    questions: [
      {
        question: "Làm thế nào để đặt lịch khám?",
        answer: "Bạn có thể đặt lịch online qua website, gọi hotline 1900 1234, hoặc đến trực tiếp tại bệnh viện. Chúng tôi sẽ xác nhận lịch hẹn trong vòng 2 giờ."
      },
      {
        question: "Có thể hủy hoặc thay đổi lịch hẹn không?",
        answer: "Có, bạn có thể hủy hoặc thay đổi lịch hẹn bằng cách gọi hotline trước giờ hẹn ít nhất 2 tiếng. Việc hủy muộn có thể áp dụng phí hủy."
      },
      {
        question: "Cần chuẩn bị gì khi đến khám?",
        answer: "Vui lòng mang theo CMND/CCCD, thẻ bảo hiểm y tế (nếu có), và đến trước giờ hẹn 15 phút để làm thủ tục."
      }
    ]
  },
  {
    id: "payment",
    title: "Thanh toán & Bảo hiểm",
    icon: CreditCard,
    questions: [
      {
        question: "Bệnh viện có nhận bảo hiểm y tế không?",
        answer: "Có, chúng tôi chấp nhận tất cả các loại thẻ bảo hiểm y tế. Vui lòng mang theo thẻ BHYT khi đến khám để được hưởng quyền lợi."
      },
      {
        question: "Có những hình thức thanh toán nào?",
        answer: "Chúng tôi chấp nhận thanh toán bằng tiền mặt, thẻ ATM, thẻ tín dụng, và chuyển khoản ngân hàng."
      },
      {
        question: "Chi phí khám có đắt không?",
        answer: "Chi phí khám tại bệnh viện chúng tôi cạnh tranh và minh bạch. Bạn có thể xem bảng giá chi tiết tại mục 'Bảng giá dịch vụ' hoặc liên hệ để được tư vấn."
      }
    ]
  },
  {
    id: "services",
    title: "Dịch vụ y tế",
    icon: FileText,
    questions: [
      {
        question: "Bệnh viện có dịch vụ cấp cứu 24/7 không?",
        answer: "Có, chúng tôi có khoa Cấp cứu hoạt động 24/7 với đội ngũ bác sĩ và y tá trực tại bệnh viện."
      },
      {
        question: "Có dịch vụ khám tại nhà không?",
        answer: "Có, chúng tôi cung cấp dịch vụ khám bệnh tại nhà cho những trường hợp đặc biệt. Vui lòng liên hệ hotline để được tư vấn chi tiết."
      },
      {
        question: "Thời gian chờ kết quả xét nghiệm bao lâu?",
        answer: "Tùy vào loại xét nghiệm: Xét nghiệm máu cơ bản (2-4 giờ), X-quang (30 phút), MRI/CT (1-2 giờ). Một số xét nghiệm đặc biệt có thể mất 1-3 ngày."
      }
    ]
  }
];

const quickContacts = [
  {
    icon: Phone,
    title: "Hotline 24/7",
    content: "1900 1234",
    description: "Hỗ trợ khẩn cấp"
  },
  {
    icon: Mail,
    title: "Email hỗ trợ",
    content: "info@healthcare.vn",
    description: "Phản hồi trong 2h"
  },
  {
    icon: MapPin,
    title: "Địa chỉ",
    content: "123 Nguyễn Du, Q1",
    description: "TP.Hồ Chí Minh"
  },
  {
    icon: Clock,
    title: "Giờ làm việc",
    content: "T2-T6: 7:30-17:30",
    description: "T7-CN: 8:00-12:00"
  }
];

const FAQ = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Câu hỏi
              <span className="text-primary block">Thường gặp</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tìm câu trả lời cho những thắc mắc phổ biến về dịch vụ y tế và quy trình khám chữa bệnh
            </p>
          </div>
        </div>
      </section>

      {/* Quick Contact Cards */}
      <section className="py-12 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {quickContacts.map((contact, index) => (
              <Card key={index} className="text-center hover:shadow-card transition-all duration-300">
                <CardContent className="p-6">
                  <div className="w-12 h-12 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                    <contact.icon className="h-6 w-6 text-white" />
                  </div>
                  <h3 className="font-semibold text-foreground mb-1">{contact.title}</h3>
                  <p className="font-medium text-primary mb-1">{contact.content}</p>
                  <p className="text-sm text-muted-foreground">{contact.description}</p>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* FAQ Sections */}
      <section className="py-16 bg-health-light">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="space-y-8">
            {faqCategories.map((category) => (
              <Card key={category.id} className="shadow-soft">
                <CardHeader>
                  <CardTitle className="flex items-center gap-3">
                    <div className="p-2 rounded-full bg-primary-light">
                      <category.icon className="h-5 w-5 text-primary" />
                    </div>
                    {category.title}
                    <Badge variant="secondary">{category.questions.length}</Badge>
                  </CardTitle>
                  <CardDescription>
                    Những câu hỏi phổ biến về {category.title.toLowerCase()}
                  </CardDescription>
                </CardHeader>
                
                <CardContent>
                  <Accordion type="single" collapsible className="w-full">
                    {category.questions.map((faq, index) => (
                      <AccordionItem key={index} value={`${category.id}-${index}`}>
                        <AccordionTrigger className="text-left hover:text-primary">
                          {faq.question}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {faq.answer}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Still Need Help Section */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="bg-gradient-secondary border-none shadow-soft">
            <CardContent className="p-12 text-center">
              <HelpCircle className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Vẫn cần hỗ trợ?
              </h2>
              <p className="text-lg text-muted-foreground max-w-2xl mx-auto mb-8">
                Nếu không tìm thấy câu trả lời cho thắc mắc của bạn, đừng ngại liên hệ với chúng tôi. 
                Đội ngũ hỗ trợ luôn sẵn sàng giúp đỡ 24/7.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="healthcare">
                  <Phone className="mr-2 h-5 w-5" />
                  Gọi ngay: 1900 1234
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="mr-2 h-5 w-5" />
                  Gửi email hỗ trợ
                </Button>
              </div>
            </CardContent>
          </Card>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default FAQ;