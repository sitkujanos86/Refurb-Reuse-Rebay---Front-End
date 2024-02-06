import { NavLink, SimpleGrid, Center, Container } from "@mantine/core";
import { IconBrandGithubFilled } from "@tabler/icons-react";
import { useViewportSize } from "@mantine/hooks";

function Footer() {
  const { width } = useViewportSize();
  return (
    <Container mah="5%">
      <Center>
        <SimpleGrid cols={width > 1200 ? 2 : 1}>
          <NavLink
            href="https://github.com/sitkujanos86/json-server-backend.git"
            label="GitHub Back End Repository"
            leftSection={<IconBrandGithubFilled size="1rem" stroke={1.5} />}
            target="_blank"
            style={{ width: "250px" }}
          />
          <NavLink
            href="https://github.com/emi-fto/E-commerce-Web-App-React.git"
            label="GitHub Front End Repository"
            leftSection={<IconBrandGithubFilled size="1rem" stroke={1.5} />}
            target="_blank"
            style={{ width: "250px" }}
          />
        </SimpleGrid>
      </Center>
    </Container>
  );
}

export default Footer;
