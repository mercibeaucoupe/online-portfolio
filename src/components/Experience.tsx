import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Calendar, MapPin } from "lucide-react";

const Experience = () => {
  const experiences = [
    {
      title: "Senior Software Engineer",
      company: "TechCorp Solutions",
      location: "San Francisco, CA",
      period: "2022 - Present",
      description: "Leading development of microservices architecture serving 1M+ users. Mentoring junior developers and implementing CI/CD pipelines that reduced deployment time by 70%.",
      technologies: ["React", "Node.js", "AWS", "Docker", "Kubernetes"],
      achievements: [
        "Improved application performance by 40%",
        "Led team of 5 developers",
        "Reduced deployment time by 70%"
      ]
    },
    {
      title: "Full-Stack Developer",
      company: "Innovation Labs",
      location: "Austin, TX",
      period: "2020 - 2022",
      description: "Developed and maintained multiple client projects using modern web technologies. Collaborated with design teams to create responsive, user-friendly interfaces.",
      technologies: ["Vue.js", "Python", "PostgreSQL", "AWS"],
      achievements: [
        "Delivered 15+ client projects",
        "Increased client satisfaction by 25%",
        "Implemented automated testing"
      ]
    },
    {
      title: "Junior Developer",
      company: "StartupXYZ",
      location: "Remote",
      period: "2019 - 2020",
      description: "Built responsive web applications and contributed to the development of core platform features. Gained experience in agile development and version control.",
      technologies: ["JavaScript", "React", "Express.js", "MongoDB"],
      achievements: [
        "Contributed to 3 major releases",
        "Improved code quality standards",
        "Reduced bug reports by 30%"
      ]
    }
  ];

  const education = [
    {
      degree: "Bachelor of Science in Computer Science",
      school: "University of Technology",
      period: "2015 - 2019",
      gpa: "3.8/4.0",
      highlights: ["Magna Cum Laude", "Dean's List", "Computer Science Excellence Award"]
    }
  ];

  return (
    <section id="experience" className="py-20 bg-background">
      <div className="container mx-auto px-6">
        <div className="max-w-4xl mx-auto">
          {/* Section Header */}
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-bold mb-6">
              Professional <span className="bg-gradient-primary bg-clip-text text-transparent">Experience</span>
            </h2>
            <p className="text-xl text-muted-foreground">
              A journey of growth, learning, and impactful contributions to innovative projects.
            </p>
          </div>

          {/* Experience Timeline */}
          <div className="space-y-8 mb-16">
            {experiences.map((exp, index) => (
              <div key={index} className="relative">
                {/* Timeline Line */}
                {index < experiences.length - 1 && (
                  <div className="absolute left-8 top-16 w-0.5 h-32 bg-gradient-primary opacity-30"></div>
                )}
                
                {/* Timeline Dot */}
                <div className="absolute left-6 top-8 w-4 h-4 bg-gradient-primary rounded-full shadow-glow"></div>
                
                {/* Experience Card */}
                <Card className="ml-16 p-8 bg-gradient-secondary border-primary/20 hover:shadow-card transition-all duration-300">
                  <div className="space-y-4">
                    {/* Header */}
                    <div className="flex flex-col md:flex-row md:items-start md:justify-between gap-4">
                      <div>
                        <h3 className="text-xl font-bold text-primary">{exp.title}</h3>
                        <p className="text-lg font-semibold">{exp.company}</p>
                      </div>
                      <div className="flex flex-col md:items-end gap-2">
                        <div className="flex items-center text-muted-foreground">
                          <Calendar className="mr-2 h-4 w-4" />
                          {exp.period}
                        </div>
                        <div className="flex items-center text-muted-foreground">
                          <MapPin className="mr-2 h-4 w-4" />
                          {exp.location}
                        </div>
                      </div>
                    </div>

                    {/* Description */}
                    <p className="text-muted-foreground leading-relaxed">
                      {exp.description}
                    </p>

                    {/* Technologies */}
                    <div className="flex flex-wrap gap-2">
                      {exp.technologies.map((tech, techIndex) => (
                        <Badge 
                          key={techIndex}
                          variant="outline"
                          className="border-primary/50 text-primary"
                        >
                          {tech}
                        </Badge>
                      ))}
                    </div>

                    {/* Achievements */}
                    <div className="space-y-2">
                      <h4 className="font-semibold text-accent">Key Achievements:</h4>
                      <ul className="list-disc list-inside space-y-1 text-muted-foreground">
                        {exp.achievements.map((achievement, achIndex) => (
                          <li key={achIndex}>{achievement}</li>
                        ))}
                      </ul>
                    </div>
                  </div>
                </Card>
              </div>
            ))}
          </div>

          {/* Education Section */}
          <div>
            <h3 className="text-2xl font-bold text-center mb-8">
              <span className="bg-gradient-primary bg-clip-text text-transparent">Education</span>
            </h3>
            {education.map((edu, index) => (
              <Card key={index} className="p-8 bg-card/50 border-primary/20">
                <div className="text-center space-y-4">
                  <h4 className="text-xl font-bold text-primary">{edu.degree}</h4>
                  <p className="text-lg font-semibold">{edu.school}</p>
                  <div className="flex justify-center items-center gap-4 text-muted-foreground">
                    <span className="flex items-center">
                      <Calendar className="mr-2 h-4 w-4" />
                      {edu.period}
                    </span>
                    <span>GPA: {edu.gpa}</span>
                  </div>
                  <div className="flex flex-wrap justify-center gap-2">
                    {edu.highlights.map((highlight, highlightIndex) => (
                      <Badge 
                        key={highlightIndex}
                        className="bg-gradient-primary text-primary-foreground"
                      >
                        {highlight}
                      </Badge>
                    ))}
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Experience;