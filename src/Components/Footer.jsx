import { NavLink, SimpleGrid, Center } from "@mantine/core";
import { IconBrandGithubFilled } from "@tabler/icons-react";

function Footer() {
  return (
    <>
      <Center>
        <SimpleGrid cols={2}>
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
    </>
  );
}

export default Footer;
