import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  GraduationCap, 
  Award, 
  Calendar,
  Phone,
  Mail,
  MapPin
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import doctorsTeamImage from "@/assets/doctors-team.jpg";

const doctors = [
  {
    id: 1,
    name: "BS. Nguyễn Văn Minh",
    specialty: "Tim mạch",
    experience: "15+ năm",
    education: "Đại học Y Hà Nội",
    certifications: ["Chuyên khoa I Tim mạch", "Thạc sĩ Y học"],
    languages: ["Tiếng Việt", "Tiếng Anh"],
    avatar: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 2,
    name: "BS. Trần Thị Lan",
    specialty: "Sản phụ khoa",
    experience: "12+ năm",
    education: "Đại học Y TP.HCM",
    certifications: ["Chuyên khoa I Sản phụ khoa", "Bác sĩ CKI"],
    languages: ["Tiếng Việt", "Tiếng Pháp"],
    avatar: "https://images.unsplash.com/photo-1594824506039-8a0c8c3d1ed4?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 3,
    name: "BS. Lê Hoàng Nam",
    specialty: "Thần kinh",
    experience: "18+ năm",
    education: "Đại học Y dược TP.HCM",
    certifications: ["Tiến sĩ Y học", "Chuyên khoa II"],
    languages: ["Tiếng Việt", "Tiếng Anh", "Tiếng Nhật"],
    avatar: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 4,
    name: "BS. Phạm Thị Hoa",
    specialty: "Nhi khoa",
    experience: "10+ năm",
    education: "Đại học Y Hà Nội",
    certifications: ["Chuyên khoa I Nhi", "Thạc sĩ Y học"],
    languages: ["Tiếng Việt", "Tiếng Anh"],
    avatar: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 5,
    name: "BS. Vũ Minh Tuấn",
    specialty: "Mắt",
    experience: "14+ năm",
    education: "Đại học Y Huế",
    certifications: ["Chuyên khoa I Mắt", "Fellowship Mỹ"],
    languages: ["Tiếng Việt", "Tiếng Anh"],
    avatar: "https://images.unsplash.com/photo-1628191081695-1ac5582d6a2b?w=300&h=300&fit=crop&crop=face"
  },
  {
    id: 6,
    name: "BS. Hoàng Thị Mai",
    specialty: "Da liễu",
    experience: "8+ năm",
    education: "Đại học Y dược TP.HCM",
    certifications: ["Chuyên khoa I Da liễu", "Chứng chỉ Laser"],
    languages: ["Tiếng Việt", "Tiếng Hàn"],
    avatar: "https://images.unsplash.com/photo-1582311405919-3b13e2c5e16e?w=300&h=300&fit=crop&crop=face"
  }
];

const Doctors = () => {
  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center mb-12">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Đội ngũ
              <span className="text-primary block">Bác sĩ giàu kinh nghiệm</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Đội ngũ y bác sĩ chuyên nghiệp, tận tâm với nhiều năm kinh nghiệm 
              trong các lĩnh vực chuyên khoa khác nhau
            </p>
          </div>
          
          <div className="relative rounded-2xl overflow-hidden shadow-soft max-w-4xl mx-auto">
            <img 
              src={doctorsTeamImage} 
              alt="Đội ngũ bác sĩ HealthCare" 
              className="w-full h-64 md:h-80 object-cover"
            />
            <div className="absolute inset-0 bg-gradient-primary opacity-10"></div>
          </div>
        </div>
      </section>

      {/* Doctors Grid */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
            {doctors.map((doctor) => (
              <Card key={doctor.id} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
                <CardHeader className="text-center">
                  <div className="relative mx-auto mb-4">
                    <img 
                      src={doctor.avatar} 
                      alt={doctor.name}
                      className="w-24 h-24 rounded-full object-cover border-4 border-primary-light"
                    />
                    <div className="absolute -bottom-2 -right-2 p-2 rounded-full bg-gradient-primary">
                      <GraduationCap className="h-4 w-4 text-white" />
                    </div>
                  </div>
                  
                  <CardTitle className="text-xl font-semibold text-foreground">
                    {doctor.name}
                  </CardTitle>
                  
                  <Badge variant="secondary" className="w-fit mx-auto">
                    {doctor.specialty}
                  </Badge>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="space-y-3">
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <Award className="h-4 w-4 text-primary" />
                      <span>{doctor.experience} kinh nghiệm</span>
                    </div>
                    
                    <div className="flex items-center gap-2 text-sm text-muted-foreground">
                      <GraduationCap className="h-4 w-4 text-primary" />
                      <span>{doctor.education}</span>
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Chứng chỉ:</h4>
                    <div className="flex flex-wrap gap-1">
                      {doctor.certifications.map((cert, idx) => (
                        <Badge key={idx} variant="outline" className="text-xs">
                          {cert}
                        </Badge>
                      ))}
                    </div>
                  </div>
                  
                  <div className="space-y-2">
                    <h4 className="font-medium text-foreground">Ngôn ngữ:</h4>
                    <p className="text-sm text-muted-foreground">
                      {doctor.languages.join(", ")}
                    </p>
                  </div>
                  
                  <Button variant="healthcare" className="w-full">
                    <Calendar className="mr-2 h-4 w-4" />
                    Đặt lịch khám
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Contact Section */}
      <section className="py-16 bg-health-light">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h2 className="text-3xl font-bold text-foreground mb-4">
              Liên hệ đặt lịch khám
            </h2>
            <p className="text-muted-foreground mb-8 max-w-2xl mx-auto">
              Hãy liên hệ với chúng tôi để được tư vấn và đặt lịch khám với các bác sĩ chuyên khoa
            </p>
            
            <div className="flex flex-col sm:flex-row gap-4 justify-center items-center">
              <div className="flex items-center gap-2 text-muted-foreground">
                <Phone className="h-5 w-5 text-primary" />
                <span>Hotline: 1900 1234</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <Mail className="h-5 w-5 text-primary" />
                <span>info@healthcare.vn</span>
              </div>
              <div className="flex items-center gap-2 text-muted-foreground">
                <MapPin className="h-5 w-5 text-primary" />
                <span>123 Nguyễn Du, Q1, TP.HCM</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default Doctors;