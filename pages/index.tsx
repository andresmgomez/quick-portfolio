import Layout from '@/layouts/Layout'
import Hero from '@/components/Hero'
import About from '@/components/About'
import MyProjects from '@/components/MyProjects'
import Contact from '@/components/Contact'

// const inter = Inter({ subsets: ['latin'] })

export default function Index() {
	return (
		<Layout>
			<Hero />
			<About />
			<MyProjects />
			<Contact />
		</Layout>
	)
}
