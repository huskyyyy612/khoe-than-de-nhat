import { useState } from "react";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Badge } from "@/components/ui/badge";
import { Alert, AlertDescription } from "@/components/ui/alert";
import { 
  Search, 
  FileText, 
  Download, 
  Calendar,
  User,
  Phone,
  Mail,
  AlertCircle,
  CheckCircle,
  Clock,
  Shield
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { useToast } from "@/hooks/use-toast";

const Results = () => {
  const [searchCode, setSearchCode] = useState("");
  const [phoneNumber, setPhoneNumber] = useState("");
  const [searchResult, setSearchResult] = useState<any>(null);
  const [isLoading, setIsLoading] = useState(false);
  const { toast } = useToast();

  // Mock data for demonstration
  const mockResults = {
    "KQ001234": {
      patientName: "Nguyễn Văn An",
      patientPhone: "0901234567",
      testDate: "2024-01-15",
      testType: "Khám tổng quát + Xét nghiệm máu",
      doctor: "BS. Nguyễn Văn Minh",
      status: "Hoàn thành",
      results: [
        {
          category: "Xét nghiệm máu",
          tests: [
            { name: "Hemoglobin", value: "14.2 g/dL", normal: "12.0-15.5 g/dL", status: "normal" },
            { name: "Bạch cầu", value: "7.8 K/µL", normal: "4.5-11.0 K/µL", status: "normal" },
            { name: "Tiểu cầu", value: "320 K/µL", normal: "150-450 K/µL", status: "normal" },
            { name: "Glucose", value: "105 mg/dL", normal: "70-100 mg/dL", status: "high" }
          ]
        },
        {
          category: "Chức năng gan",
          tests: [
            { name: "ALT", value: "28 U/L", normal: "7-56 U/L", status: "normal" },
            { name: "AST", value: "22 U/L", normal: "10-40 U/L", status: "normal" }
          ]
        }
      ],
      notes: "Chỉ số đường huyết hơi cao. Cần theo dõi chế độ ăn và tập thể dục. Tái khám sau 3 tháng.",
      nextAppointment: "2024-04-15"
    }
  };

  const handleSearch = () => {
    if (!searchCode || !phoneNumber) {
      toast({
        title: "Thông tin chưa đầy đủ",
        description: "Vui lòng nhập đầy đủ mã kết quả và số điện thoại",
        variant: "destructive"
      });
      return;
    }

    setIsLoading(true);
    
    // Simulate API call
    setTimeout(() => {
      const result = mockResults[searchCode as keyof typeof mockResults];
      
      if (result && result.patientPhone === phoneNumber) {
        setSearchResult(result);
        toast({
          title: "Tìm thấy kết quả",
          description: "Kết quả xét nghiệm đã được tải thành công"
        });
      } else {
        setSearchResult(null);
        toast({
          title: "Không tìm thấy",
          description: "Mã kết quả hoặc số điện thoại không chính xác",
          variant: "destructive"
        });
      }
      setIsLoading(false);
    }, 2000);
  };

  const getStatusColor = (status: string) => {
    switch (status) {
      case "normal": return "bg-green-100 text-green-800 border-green-200";
      case "high": return "bg-red-100 text-red-800 border-red-200";
      case "low": return "bg-blue-100 text-blue-800 border-blue-200";
      default: return "bg-gray-100 text-gray-800 border-gray-200";
    }
  };

  const getStatusIcon = (status: string) => {
    switch (status) {
      case "normal": return <CheckCircle className="h-4 w-4 text-green-600" />;
      case "high": 
      case "low": return <AlertCircle className="h-4 w-4 text-red-600" />;
      default: return <Clock className="h-4 w-4 text-gray-600" />;
    }
  };

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tra cứu
              <span className="text-primary block">Kết quả xét nghiệm</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Tra cứu và tải kết quả xét nghiệm trực tuyến một cách nhanh chóng và bảo mật
            </p>
          </div>
        </div>
      </section>

      {/* Search Form */}
      <section className="py-20 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="max-w-2xl mx-auto">
            <Card className="shadow-soft">
              <CardHeader>
                <CardTitle className="flex items-center gap-2">
                  <Search className="h-5 w-5 text-primary" />
                  Tra cứu kết quả
                </CardTitle>
                <CardDescription>
                  Nhập mã kết quả và số điện thoại để xem kết quả xét nghiệm
                </CardDescription>
              </CardHeader>
              
              <CardContent className="space-y-6">
                <Alert>
                  <Shield className="h-4 w-4" />
                  <AlertDescription>
                    Thông tin của bạn được bảo mật theo tiêu chuẩn HIPAA. 
                    Chỉ bệnh nhân hoặc người được ủy quyền mới có thể truy cập kết quả.
                  </AlertDescription>
                </Alert>

                <div className="space-y-4">
                  <div className="space-y-2">
                    <Label htmlFor="searchCode">Mã kết quả *</Label>
                    <Input
                      id="searchCode"
                      placeholder="Ví dụ: KQ001234"
                      value={searchCode}
                      onChange={(e) => setSearchCode(e.target.value.toUpperCase())}
                    />
                    <p className="text-sm text-muted-foreground">
                      Mã kết quả được ghi trên giấy hẹn hoặc phiếu xét nghiệm
                    </p>
                  </div>
                  
                  <div className="space-y-2">
                    <Label htmlFor="phoneNumber">Số điện thoại *</Label>
                    <Input
                      id="phoneNumber"
                      type="tel"
                      placeholder="Số điện thoại đã đăng ký"
                      value={phoneNumber}
                      onChange={(e) => setPhoneNumber(e.target.value)}
                    />
                  </div>
                </div>

                <Button 
                  onClick={handleSearch} 
                  className="w-full" 
                  size="lg"
                  variant="healthcare"
                  disabled={isLoading}
                >
                  {isLoading ? (
                    <>
                      <Clock className="mr-2 h-5 w-5 animate-spin" />
                      Đang tìm kiếm...
                    </>
                  ) : (
                    <>
                      <Search className="mr-2 h-5 w-5" />
                      Tra cứu kết quả
                    </>
                  )}
                </Button>

                <div className="text-center">
                  <p className="text-sm text-muted-foreground">
                    Mã demo để test: <code className="bg-muted px-2 py-1 rounded">KQ001234</code> 
                    với số điện thoại <code className="bg-muted px-2 py-1 rounded">0901234567</code>
                  </p>
                </div>
              </CardContent>
            </Card>
          </div>
        </div>
      </section>

      {/* Search Results */}
      {searchResult && (
        <section className="pb-20 bg-background">
          <div className="container mx-auto px-6 lg:px-8">
            <div className="max-w-4xl mx-auto space-y-6">
              {/* Patient Info */}
              <Card className="shadow-soft">
                <CardHeader>
                  <div className="flex justify-between items-start">
                    <div>
                      <CardTitle className="flex items-center gap-2">
                        <User className="h-5 w-5 text-primary" />
                        Thông tin bệnh nhân
                      </CardTitle>
                      <CardDescription>
                        Kết quả xét nghiệm ngày {new Date(searchResult.testDate).toLocaleDateString('vi-VN')}
                      </CardDescription>
                    </div>
                    <Badge className="bg-green-100 text-green-800">
                      {searchResult.status}
                    </Badge>
                  </div>
                </CardHeader>
                
                <CardContent>
                  <div className="grid md:grid-cols-2 gap-6">
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <User className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Tên bệnh nhân:</span>
                        <span>{searchResult.patientName}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <Phone className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Số điện thoại:</span>
                        <span>{searchResult.patientPhone}</span>
                      </div>
                    </div>
                    <div className="space-y-3">
                      <div className="flex items-center gap-2">
                        <Calendar className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Ngày xét nghiệm:</span>
                        <span>{new Date(searchResult.testDate).toLocaleDateString('vi-VN')}</span>
                      </div>
                      <div className="flex items-center gap-2">
                        <FileText className="h-4 w-4 text-muted-foreground" />
                        <span className="font-medium">Loại xét nghiệm:</span>
                        <span>{searchResult.testType}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-6 pt-6 border-t border-border">
                    <Button variant="outline" className="mr-4">
                      <Download className="mr-2 h-4 w-4" />
                      Tải file PDF
                    </Button>
                    <Button variant="outline">
                      <Mail className="mr-2 h-4 w-4" />
                      Gửi qua email
                    </Button>
                  </div>
                </CardContent>
              </Card>

              {/* Test Results */}
              {searchResult.results.map((category: any, index: number) => (
                <Card key={index} className="shadow-card">
                  <CardHeader>
                    <CardTitle className="flex items-center gap-2">
                      <FileText className="h-5 w-5 text-primary" />
                      {category.category}
                    </CardTitle>
                  </CardHeader>
                  
                  <CardContent>
                    <div className="space-y-4">
                      {category.tests.map((test: any, testIndex: number) => (
                        <div key={testIndex} className="flex items-center justify-between p-4 rounded-lg bg-muted/30">
                          <div className="flex-1">
                            <div className="flex items-center gap-2">
                              {getStatusIcon(test.status)}
                              <span className="font-medium">{test.name}</span>
                            </div>
                            <p className="text-sm text-muted-foreground mt-1">
                              Giá trị bình thường: {test.normal}
                            </p>
                          </div>
                          <div className="text-right">
                            <div className={`inline-flex px-3 py-1 rounded-full text-sm font-medium border ${getStatusColor(test.status)}`}>
                              {test.value}
                            </div>
                          </div>
                        </div>
                      ))}
                    </div>
                  </CardContent>
                </Card>
              ))}

              {/* Doctor's Notes */}
              <Card className="shadow-card">
                <CardHeader>
                  <CardTitle className="flex items-center gap-2">
                    <FileText className="h-5 w-5 text-primary" />
                    Nhận xét của bác sĩ
                  </CardTitle>
                </CardHeader>
                
                <CardContent>
                  <p className="text-foreground mb-4">{searchResult.notes}</p>
                  
                  <div className="p-4 bg-health-light rounded-lg">
                    <div className="flex items-center gap-2 mb-2">
                      <Calendar className="h-4 w-4 text-primary" />
                      <span className="font-medium">Lịch tái khám:</span>
                    </div>
                    <p className="text-foreground">
                      {new Date(searchResult.nextAppointment).toLocaleDateString('vi-VN')}
                    </p>
                  </div>
                  
                  <div className="mt-4 pt-4 border-t border-border">
                    <p className="text-sm text-muted-foreground">
                      <strong>Bác sĩ phụ trách:</strong> {searchResult.doctor}
                    </p>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>
      )}

      {/* Help Section */}
      <section className="py-16 bg-health-light">
        <div className="container mx-auto px-6 lg:px-8">
          <Card className="bg-gradient-secondary border-none shadow-soft max-w-3xl mx-auto">
            <CardContent className="p-12 text-center">
              <AlertCircle className="h-12 w-12 text-primary mx-auto mb-6" />
              <h2 className="text-2xl font-bold text-foreground mb-4">
                Cần hỗ trợ?
              </h2>
              <p className="text-muted-foreground mb-8">
                Nếu bạn gặp khó khăn trong việc tra cứu hoặc có thắc mắc về kết quả, 
                hãy liên hệ với chúng tôi để được hỗ trợ.
              </p>
              
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" variant="healthcare">
                  <Phone className="mr-2 h-5 w-5" />
                  Hotline: 1900 1234
                </Button>
                <Button size="lg" variant="outline">
                  <Mail className="mr-2 h-5 w-5" />
                  Email hỗ trợ
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

export default Results;