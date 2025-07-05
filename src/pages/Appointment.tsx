import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Calendar } from "@/components/ui/calendar";
import { Popover, PopoverContent, PopoverTrigger } from "@/components/ui/popover";
import { Badge } from "@/components/ui/badge";
import { 
  Calendar as CalendarIcon, 
  Clock, 
  User, 
  Phone,
  Mail,
  MapPin,
  CheckCircle,
  AlertCircle
} from "lucide-react";
import { format } from "date-fns";
import { vi } from "date-fns/locale";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import consultationImage from "@/assets/consultation.jpg";
import { useToast } from "@/hooks/use-toast";

const specialties = [
  "Khám tổng quát",
  "Tim mạch",
  "Thần kinh",
  "Sản phụ khoa",
  "Nhi khoa",
  "Mắt",
  "Da liễu",
  "Răng hàm mặt"
];

const timeSlots = [
  "08:00", "08:30", "09:00", "09:30", "10:00", "10:30",
  "14:00", "14:30", "15:00", "15:30", "16:00", "16:30"
];

const doctors = [
  { id: 1, name: "BS. Nguyễn Văn Minh", specialty: "Tim mạch" },
  { id: 2, name: "BS. Trần Thị Lan", specialty: "Sản phụ khoa" },
  { id: 3, name: "BS. Lê Hoàng Nam", specialty: "Thần kinh" },
  { id: 4, name: "BS. Phạm Thị Hoa", specialty: "Nhi khoa" },
  { id: 5, name: "BS. Vũ Minh Tuấn", specialty: "Mắt" },
  { id: 6, name: "BS. Hoàng Thị Mai", specialty: "Da liễu" }
];

const Appointment = () => {
  const [selectedDate, setSelectedDate] = useState<Date>();
  const [selectedTime, setSelectedTime] = useState("");
  const [selectedSpecialty, setSelectedSpecialty] = useState("");
  const [selectedDoctor, setSelectedDoctor] = useState("");
  const [formData, setFormData] = useState({
    fullName: "",
    phone: "",
    email: "",
    reason: ""
  });
  const { toast } = useToast();

  const filteredDoctors = selectedSpecialty 
    ? doctors.filter(doctor => doctor.specialty === selectedSpecialty)
    : doctors;

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    
    if (!selectedDate || !selectedTime || !selectedSpecialty || !formData.fullName || !formData.phone) {
      toast({
        title: "Thông tin chưa đầy đủ",
        description: "Vui lòng điền đầy đủ thông tin bắt buộc",
        variant: "destructive"
      });
      return;
    }

    toast({
      title: "Đặt lịch thành công!",
      description: "Chúng tôi sẽ liên hệ với bạn để xác nhận lịch hẹn trong thời gian sớm nhất.",
    });

    // Reset form
    setSelectedDate(undefined);
    setSelectedTime("");
    setSelectedSpecialty("");
    setSelectedDoctor("");
    setFormData({
      fullName: "",
      phone: "",
      email: "",
      reason: ""
    });
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-12 items-center">
            <div>
              <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
                Đặt lịch
                <span className="text-primary block">Khám bệnh online</span>
              </h1>
              <p className="text-lg text-muted-foreground mb-6">
                Đặt lịch khám bệnh nhanh chóng, tiện lợi với đội ngũ bác sĩ chuyên khoa giàu kinh nghiệm
              </p>
              
              <div className="space-y-4">
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Đặt lịch 24/7 online</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Xác nhận lịch hẹn nhanh chóng</span>
                </div>
                <div className="flex items-center gap-3">
                  <CheckCircle className="h-5 w-5 text-primary" />
                  <span>Bác sĩ chuyên khoa giàu kinh nghiệm</span>
                </div>
              </div>
            </div>
            
            <div className="relative">
              <img 
                src={consultationImage} 
                alt="Tư vấn y tế" 
                className="rounded-2xl shadow-soft"
              />
            </div>
          </div>
        </div>
      </section>

      {/* Appointment Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-4xl mx-auto">
            <div className="text-center mb-12">
              <h2 className="text-3xl font-bold text-foreground mb-4">
                Thông tin đặt lịch khám
              </h2>
              <p className="text-muted-foreground">
                Vui lòng điền đầy đủ thông tin để chúng tôi có thể phục vụ bạn tốt nhất
              </p>
            </div>

            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <CalendarIcon className="h-5 w-5 text-primary" />
                  Đặt lịch khám bệnh
                </CardTitle>
                <CardDescription>
                  Các trường có dấu (*) là bắt buộc
                </CardDescription>
              </CardHeader>
              
              <CardContent>
                <form onSubmit={handleSubmit} className="space-y-6">
                  {/* Personal Information */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label htmlFor="fullName">Họ và tên *</Label>
                      <Input
                        id="fullName"
                        value={formData.fullName}
                        onChange={(e) => setFormData({...formData, fullName: e.target.value})}
                        placeholder="Nhập họ và tên đầy đủ"
                        required
                      />
                    </div>
                    
                    <div className="space-y-2">
                      <Label htmlFor="phone">Số điện thoại *</Label>
                      <Input
                        id="phone"
                        type="tel"
                        value={formData.phone}
                        onChange={(e) => setFormData({...formData, phone: e.target.value})}
                        placeholder="0123 456 789"
                        required
                      />
                    </div>
                  </div>

                  <div className="space-y-2">
                    <Label htmlFor="email">Email</Label>
                    <Input
                      id="email"
                      type="email"
                      value={formData.email}
                      onChange={(e) => setFormData({...formData, email: e.target.value})}
                      placeholder="email@example.com"
                    />
                  </div>

                  {/* Specialty Selection */}
                  <div className="space-y-2">
                    <Label>Chuyên khoa *</Label>
                    <Select value={selectedSpecialty} onValueChange={setSelectedSpecialty}>
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn chuyên khoa" />
                      </SelectTrigger>
                      <SelectContent>
                        {specialties.map((specialty) => (
                          <SelectItem key={specialty} value={specialty}>
                            {specialty}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Doctor Selection */}
                  <div className="space-y-2">
                    <Label>Bác sĩ</Label>
                    <Select 
                      value={selectedDoctor} 
                      onValueChange={setSelectedDoctor}
                      disabled={!selectedSpecialty}
                    >
                      <SelectTrigger>
                        <SelectValue placeholder="Chọn bác sĩ (tùy chọn)" />
                      </SelectTrigger>
                      <SelectContent>
                        {filteredDoctors.map((doctor) => (
                          <SelectItem key={doctor.id} value={doctor.name}>
                            {doctor.name}
                          </SelectItem>
                        ))}
                      </SelectContent>
                    </Select>
                  </div>

                  {/* Date and Time Selection */}
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-2">
                      <Label>Ngày khám *</Label>
                      <Popover>
                        <PopoverTrigger asChild>
                          <Button
                            variant="outline"
                            className="w-full justify-start text-left font-normal"
                          >
                            <CalendarIcon className="mr-2 h-4 w-4" />
                            {selectedDate ? (
                              format(selectedDate, "PPP", { locale: vi })
                            ) : (
                              <span>Chọn ngày khám</span>
                            )}
                          </Button>
                        </PopoverTrigger>
                        <PopoverContent className="w-auto p-0">
                          <Calendar
                            mode="single"
                            selected={selectedDate}
                            onSelect={setSelectedDate}
                            disabled={(date) => 
                              date < new Date() || date.getDay() === 0
                            }
                            initialFocus
                          />
                        </PopoverContent>
                      </Popover>
                    </div>

                    <div className="space-y-2">
                      <Label>Giờ khám *</Label>
                      <Select value={selectedTime} onValueChange={setSelectedTime}>
                        <SelectTrigger>
                          <SelectValue placeholder="Chọn giờ khám" />
                        </SelectTrigger>
                        <SelectContent>
                          {timeSlots.map((time) => (
                            <SelectItem key={time} value={time}>
                              {time}
                            </SelectItem>
                          ))}
                        </SelectContent>
                      </Select>
                    </div>
                  </div>

                  {/* Reason */}
                  <div className="space-y-2">
                    <Label htmlFor="reason">Lý do khám</Label>
                    <Textarea
                      id="reason"
                      value={formData.reason}
                      onChange={(e) => setFormData({...formData, reason: e.target.value})}
                      placeholder="Mô tả ngắn gọn về triệu chứng hoặc lý do khám bệnh"
                      rows={3}
                    />
                  </div>

                  <Button type="submit" size="lg" variant="healthcare" className="w-full">
                    <CalendarIcon className="mr-2 h-5 w-5" />
                    Đặt lịch khám
                  </Button>
                </form>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Information Section */}
      <section className="py-16 bg-health-light">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-3 gap-8">
            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Phone className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Hotline hỗ trợ</h3>
                <p className="text-muted-foreground mb-2">Liên hệ trực tiếp</p>
                <Badge variant="outline">1900 1234</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <Mail className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Email</h3>
                <p className="text-muted-foreground mb-2">Gửi yêu cầu qua email</p>
                <Badge variant="outline">info@healthcare.vn</Badge>
              </CardContent>
            </Card>

            <Card className="text-center">
              <CardContent className="p-6">
                <div className="w-16 h-16 rounded-full bg-gradient-primary flex items-center justify-center mx-auto mb-4">
                  <MapPin className="h-8 w-8 text-white" />
                </div>
                <h3 className="font-semibold text-foreground mb-2">Địa chỉ</h3>
                <p className="text-muted-foreground mb-2">Đến trực tiếp</p>
                <Badge variant="outline">123 Nguyễn Du, Q1, TP.HCM</Badge>
              </CardContent>
            </Card>
          </div>
          
          <div className="mt-8 p-6 bg-card rounded-lg border-l-4 border-primary">
            <div className="flex items-start gap-3">
              <AlertCircle className="h-5 w-5 text-primary mt-0.5" />
              <div>
                <h4 className="font-semibold text-foreground mb-2">Lưu ý quan trọng:</h4>
                <ul className="text-sm text-muted-foreground space-y-1">
                  <li>• Vui lòng đến trước giờ hẹn 15 phút để làm thủ tục</li>
                  <li>• Mang theo giấy tờ tùy thân và thẻ bảo hiểm y tế (nếu có)</li>
                  <li>• Liên hệ hotline nếu cần thay đổi lịch hẹn</li>
                  <li>• Chúng tôi sẽ gọi xác nhận lịch hẹn trong vòng 2 giờ</li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Appointment;