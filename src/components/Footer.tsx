import { Github, Linkedin, Mail, Heart } from 'lucide-react'

const Footer = () => {
	const currentYear = new Date().getFullYear()

	const socialLinks = [
		{ icon: <Github className="h-5 w-5" />, href: 'https://github.com/mercibeaucoupe', label: 'GitHub' },
		{
			icon: <Linkedin className="h-5 w-5" />,
			href: 'https://linkedin.com/in/woo-jung-b8851a145"',
			label: 'LinkedIn',
		},
		{ icon: <Mail className="h-5 w-5" />, href: 'mailto:jung_woo@live.com', label: 'Email' },
	]

	const scrollToTop = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' })
	}

	return (
		<footer className="bg-background border-t border-primary/20">
			<div className="container mx-auto px-6 py-12">
				<div className="flex flex-col md:flex-row justify-between items-center space-y-6 md:space-y-0">
					{/* Logo and Description */}
					<div className="text-center md:text-left">
						<button
							onClick={scrollToTop}
							className="text-2xl font-bold mb-2 hover:opacity-80 transition-opacity"
						>
							<span className="bg-gradient-primary bg-clip-text text-transparent">Woojin Jung</span>
						</button>
						<p className="text-muted-foreground">Building the future with code, one project at a time.</p>
					</div>

					{/* Social Links */}
					<div className="flex space-x-6">
						{socialLinks.map((link, index) => (
							<a
								key={index}
								href={link.href}
								aria-label={link.label}
								className="p-3 rounded-full bg-secondary/50 hover:bg-primary/20 transition-colors group"
							>
								<span className="group-hover:text-primary transition-colors">{link.icon}</span>
							</a>
						))}
					</div>
				</div>

				{/* Copyright */}
				<div className="mt-8 pt-8 border-t border-primary/20 text-center">
					<p className="text-muted-foreground flex items-center justify-center gap-1">
						© {currentYear}
						<span className="text-primary">Woojin Jung</span>. All rights reserved.
					</p>
				</div>
			</div>
		</footer>
	)
}

export default Footer
