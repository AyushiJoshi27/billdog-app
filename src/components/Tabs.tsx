import { Tabs, TabList, TabPanels, Tab, TabPanel, Image, Link } from '@chakra-ui/react'

export default function TabsContent() {
  return (
    <>
      <Link href='/card'>Go to Cards Section</Link>
      <br/>
      <Link href='/counter'>Go to Counter Section</Link>
      <br/>
      <Link href='/user-view'>Go to user-view Section</Link>
      <br/>
      <Link href='/login'>Go to Login Section</Link>
      <Tabs defaultIndex={1}>
        <TabList>
          <Tab>Naruto</Tab>
          <Tab>Sasuke</Tab>
        </TabList>
        <TabPanels>
          <TabPanel>
            <Image
              boxSize='200px'
              fit='cover'
              src='https://www.freepnglogos.com/uploads/naruto-png/image-kunai-naruto-fictional-battle-omniverse-23.png'
            />
          </TabPanel>
          <TabPanel>
            <Image
              boxSize='200px'
              fit='cover'
              src='https://images5.alphacoders.com/810/thumbbig-810547.webp'
            />
          </TabPanel>
        </TabPanels>
      </Tabs>
    </>
  )
}