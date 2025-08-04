import { Card } from "@/components/ui/card";
import { Code, Lightbulb, Users, Zap } from "lucide-react";

const About = () => {
  const highlights = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Clean Code Advocate",
      description: "Writing maintainable, scalable, and efficient code that stands the test of time."
    },
    {
      icon: <Lightbulb className="h-8 w-8" />,
      title: "Problem Solver",
      description: "Passionate about turning complex challenges into elegant, user-friendly solutions."
    },
    {
      icon: <Users className="h-8 w-8" />,
      title: "Team Player",
      description: "Collaborative approach to development with strong communication and mentoring skills."
    },
    {
      icon: <Zap className="h-8 w-8" />,
      title: "Tech Enthusiast",
      description: "Always learning and adapting to new technologies and industry best practices."
    }
  ];

  return (
    <section id="about" className="py-20 bg-gradient-secondary">
      <div className="container mx-auto px-6">
        <div className="max-w-6xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              About <span className="bg-gradient-primary bg-clip-text text-transparent">Me</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
              I'm a passionate software engineer with 5+ years of experience building 
              full-stack applications. I love creating efficient, scalable solutions 
              that make a real impact on users' lives.
            </p>
          </div>

          {/* Main Content */}
          <div className="grid lg:grid-cols-2 gap-12 items-center mb-16">
            {/* Text Content */}
            <div className="space-y-6">
              <h3 className="text-2xl font-semibold text-primary">My Journey</h3>
              <p className="text-muted-foreground leading-relaxed">
                My journey into software development began during my computer science studies, 
                where I discovered my passion for solving complex problems through code. 
                Since then, I've worked with startups and established companies, gaining 
                expertise in modern web technologies and agile development practices.
              </p>
              <p className="text-muted-foreground leading-relaxed">
                I believe in writing code that not only works but is also maintainable, 
                testable, and scalable. I'm constantly learning new technologies and 
                methodologies to stay at the forefront of software development.
              </p>
              <div className="flex flex-wrap gap-3 pt-4">
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">React</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">TypeScript</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Node.js</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">Python</span>
                <span className="px-3 py-1 bg-primary/20 text-primary rounded-full text-sm">AWS</span>
              </div>
            </div>

            {/* Stats */}
            <div className="grid grid-cols-2 gap-6">
              <Card className="p-6 bg-card/50 border-primary/20 hover:shadow-card transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">5+</div>
                  <div className="text-muted-foreground">Years Experience</div>
                </div>
              </Card>
              <Card className="p-6 bg-card/50 border-primary/20 hover:shadow-card transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">50+</div>
                  <div className="text-muted-foreground">Projects Completed</div>
                </div>
              </Card>
              <Card className="p-6 bg-card/50 border-primary/20 hover:shadow-card transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">15+</div>
                  <div className="text-muted-foreground">Technologies</div>
                </div>
              </Card>
              <Card className="p-6 bg-card/50 border-primary/20 hover:shadow-card transition-all duration-300">
                <div className="text-center">
                  <div className="text-3xl font-bold text-primary mb-2">10+</div>
                  <div className="text-muted-foreground">Happy Clients</div>
                </div>
              </Card>
            </div>
          </div>

          {/* Highlights Grid */}
          <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
            {highlights.map((highlight, index) => (
              <Card key={index} className="p-6 bg-card/50 border-primary/20 hover:shadow-card hover:scale-105 transition-all duration-300 group">
                <div className="text-center space-y-4">
                  <div className="text-primary group-hover:text-accent transition-colors">
                    {highlight.icon}
                  </div>
                  <h4 className="text-lg font-semibold">{highlight.title}</h4>
                  <p className="text-sm text-muted-foreground leading-relaxed">
                    {highlight.description}
                  </p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;