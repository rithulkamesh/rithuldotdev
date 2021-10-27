
   
import { Container, Badge, Link, List, ListItem } from '@chakra-ui/react'
import { ExternalLinkIcon } from '@chakra-ui/icons'
import { Title, WorkImage, Meta } from '../../components/project'
import P from '../../components/paragraph'
import Layout from '../../components/layouts/article'

const project = () => (
  <Layout title="Inkdrop">
    <Container>
      <Title>
        Jaeger Panel <Badge>August 2021-</Badge>
      </Title>
      <P>
      A Hosting panel with a humongous quantity of support for all the hosting needs you would ever need + A Clean, Minimalistic UI with TONS of customisability!
      </P>
      <List ml={4} my={4}>
        <ListItem>
          <Meta>Website</Meta>
          <Link href="https://jaegerpanel.com/">
          https://jaegerpanel.com <ExternalLinkIcon mx="2px" />
          </Link>
        </ListItem>
        <ListItem>
          <Meta>Platform</Meta>
          <span>Windows/macOS/Linux Server</span>
        </ListItem>
        <ListItem>
          <Meta>Stack</Meta>
          <span>Next.js, TypeScript, PostgreSQL, Express, Docker</span>
        </ListItem>
      </List>

      <WorkImage src="/images/projects/jaegerpanel.png" alt="Jaeger Panel" />
    </Container>
  </Layout>
)

export default project