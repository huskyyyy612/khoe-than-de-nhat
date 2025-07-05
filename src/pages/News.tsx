import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { 
  Calendar, 
  User, 
  Clock,
  ArrowRight,
  Eye
} from "lucide-react";
import Header from "@/components/Header";
import Footer from "@/components/Footer";

const newsArticles = [
  {
    id: 1,
    title: "Những tiến bộ mới trong điều trị bệnh tim mạch",
    excerpt: "Khám phá các phương pháp điều trị hiện đại giúp cải thiện hiệu quả chữa trị bệnh tim mạch...",
    content: "Trong những năm gần đây, y học hiện đại đã có nhiều bước tiến vượt bậc trong việc điều trị các bệnh lý tim mạch...",
    image: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?w=600&h=400&fit=crop",
    category: "Tim mạch",
    author: "BS. Nguyễn Văn Minh",
    publishDate: "2024-01-15",
    readTime: "5 phút",
    views: 1250,
    featured: true
  },
  {
    id: 2,
    title: "Chăm sóc sức khỏe phụ nữ mang thai",
    excerpt: "Hướng dẫn chăm sóc toàn diện cho mẹ bầu từ giai đoạn đầu thai kỳ đến khi sinh...",
    content: "Thai kỳ là giai đoạn quan trọng đòi hỏi sự chăm sóc đặc biệt về sức khỏe...",
    image: "https://images.unsplash.com/photo-1555252333-9f8e92e65df9?w=600&h=400&fit=crop",
    category: "Sản phụ khoa",
    author: "BS. Trần Thị Lan",
    publishDate: "2024-01-12",
    readTime: "7 phút",
    views: 980,
    featured: true
  },
  {
    id: 3,
    title: "Phòng ngừa và điều trị bệnh mắt ở trẻ em",
    excerpt: "Các vấn đề về mắt thường gặp ở trẻ em và cách phòng ngừa hiệu quả...",
    content: "Sức khỏe mắt của trẻ em cần được quan tâm từ sớm để đảm bảo sự phát triển tốt nhất...",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
    category: "Mắt",
    author: "BS. Vũ Minh Tuấn",
    publishDate: "2024-01-10",
    readTime: "4 phút",
    views: 750,
    featured: false
  },
  {
    id: 4,
    title: "Dinh dưỡng hợp lý cho người cao tuổi",
    excerpt: "Chế độ dinh dưỡng phù hợp giúp người cao tuổi duy trì sức khỏe tốt...",
    content: "Tuổi tác đòi hỏi chế độ dinh dưỡng phù hợp để duy trì sức khỏe và chất lượng cuộc sống...",
    image: "https://images.unsplash.com/photo-1490645935967-10de6ba17061?w=600&h=400&fit=crop",
    category: "Dinh dưỡng",
    author: "BS. Lê Hoàng Nam",
    publishDate: "2024-01-08",
    readTime: "6 phút",
    views: 620,
    featured: false
  },
  {
    id: 5,
    title: "Chăm sóc da mùa đông hiệu quả",
    excerpt: "Những lưu ý quan trọng để bảo vệ làn da khỏi tác hại của thời tiết lạnh...",
    content: "Mùa đông có thể gây khô da và nhiều vấn đề khác, cần có cách chăm sóc phù hợp...",
    image: "https://images.unsplash.com/photo-1556228578-dd3f5d4e0af7?w=600&h=400&fit=crop",
    category: "Da liễu",
    author: "BS. Hoàng Thị Mai",
    publishDate: "2024-01-05",
    readTime: "3 phút",
    views: 890,
    featured: false
  },
  {
    id: 6,
    title: "Tầm quan trọng của khám sức khỏe định kỳ",
    excerpt: "Lý do tại sao bạn nên thực hiện khám sức khỏe định kỳ để phòng ngừa bệnh tật...",
    content: "Khám sức khỏe định kỳ là cầu nối quan trọng giúp phát hiện sớm các vấn đề sức khỏe...",
    image: "https://images.unsplash.com/photo-1551601651-2a8555f1a136?w=600&h=400&fit=crop",
    category: "Tổng quát",
    author: "BS. Phạm Thị Hoa",
    publishDate: "2024-01-03",
    readTime: "5 phút",
    views: 1100,
    featured: false
  }
];

const categories = ["Tất cả", "Tim mạch", "Sản phụ khoa", "Mắt", "Da liễu", "Dinh dưỡng", "Tổng quát"];

const News = () => {
  const featuredArticles = newsArticles.filter(article => article.featured);
  const regularArticles = newsArticles.filter(article => !article.featured);

  return (
    <div className="min-h-screen">
      <Header />
      
      {/* Hero Section */}
      <section className="pt-20 pb-12 bg-gradient-hero">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="text-center">
            <h1 className="text-4xl md:text-5xl font-bold text-foreground mb-4">
              Tin tức
              <span className="text-primary block">Y tế & Sức khỏe</span>
            </h1>
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
              Cập nhật những thông tin mới nhất về y tế, sức khỏe và các phương pháp chăm sóc hiệu quả
            </p>
          </div>
        </div>
      </section>

      {/* Featured Articles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Tin nổi bật</h2>
          
          <div className="grid md:grid-cols-2 gap-8 mb-16">
            {featuredArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-soft transition-all duration-300 hover:-translate-y-2">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-48 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge className="absolute top-4 left-4 bg-primary text-white">
                    {article.category}
                  </Badge>
                </div>
                
                <CardHeader>
                  <CardTitle className="text-xl group-hover:text-primary transition-colors">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="space-y-4">
                  <div className="flex items-center justify-between text-sm text-muted-foreground">
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <User className="h-4 w-4" />
                        <span>{article.author}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Calendar className="h-4 w-4" />
                        <span>{new Date(article.publishDate).toLocaleDateString('vi-VN')}</span>
                      </div>
                    </div>
                    <div className="flex items-center gap-4">
                      <div className="flex items-center gap-1">
                        <Clock className="h-4 w-4" />
                        <span>{article.readTime}</span>
                      </div>
                      <div className="flex items-center gap-1">
                        <Eye className="h-4 w-4" />
                        <span>{article.views}</span>
                      </div>
                    </div>
                  </div>
                  
                  <Button variant="ghost" className="w-full group-hover:bg-primary-light group-hover:text-primary">
                    Đọc thêm
                    <ArrowRight className="ml-2 h-4 w-4" />
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Categories Filter */}
      <section className="py-8 bg-health-light">
        <div className="container mx-auto px-6 lg:px-8">
          <div className="flex flex-wrap gap-2 justify-center">
            {categories.map((category) => (
              <Button
                key={category}
                variant={category === "Tất cả" ? "healthcare" : "outline"}
                size="sm"
              >
                {category}
              </Button>
            ))}
          </div>
        </div>
      </section>

      {/* All Articles */}
      <section className="py-16 bg-background">
        <div className="container mx-auto px-6 lg:px-8">
          <h2 className="text-3xl font-bold text-foreground mb-8">Tất cả bài viết</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {regularArticles.map((article) => (
              <Card key={article.id} className="group hover:shadow-card transition-all duration-300 hover:-translate-y-1">
                <div className="relative overflow-hidden rounded-t-lg">
                  <img 
                    src={article.image} 
                    alt={article.title}
                    className="w-full h-40 object-cover group-hover:scale-105 transition-transform duration-300"
                  />
                  <Badge variant="secondary" className="absolute top-3 left-3">
                    {article.category}
                  </Badge>
                </div>
                
                <CardHeader className="pb-3">
                  <CardTitle className="text-lg group-hover:text-primary transition-colors line-clamp-2">
                    {article.title}
                  </CardTitle>
                  <CardDescription className="text-sm text-muted-foreground line-clamp-2">
                    {article.excerpt}
                  </CardDescription>
                </CardHeader>
                
                <CardContent className="pt-0">
                  <div className="flex items-center justify-between text-xs text-muted-foreground mb-3">
                    <span>{article.author}</span>
                    <span>{new Date(article.publishDate).toLocaleDateString('vi-VN')}</span>
                  </div>
                  
                  <div className="flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Clock className="h-3 w-3" />
                      <span>{article.readTime}</span>
                    </div>
                    <div className="flex items-center gap-1">
                      <Eye className="h-3 w-3" />
                      <span>{article.views}</span>
                    </div>
                  </div>
                </CardContent>
              </Card>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button size="lg" variant="outline">
              Xem thêm bài viết
            </Button>
          </div>
        </div>
      </section>

      <Footer />
    </div>
  );
};

export default News;