import Box from "@mui/material/Box";
import Typography from "@mui/material/Typography";
import TextField from "@mui/material/TextField";
import { mapStyle } from "./styles";
import { mapBoxStyle } from "./styles";
import { titleStyle } from "./styles";
import { footerContentStyle } from "./styles";
import { smallBoxStyle } from "./styles";
import { inputsBoxStyle } from "./styles";
import { labelsStyle } from "./styles";
import { bigInputBoxStyle } from "./styles";
import { bigInputValueStyle } from "./styles";
import { smallInputBoxStyle } from "./styles";
import { smallInputBoxTwoStyle } from "./styles";
import instaFooter from "../../assets//instaFooter.svg";
import wasapFooter from "../../assets//wasapFooter.svg";

function Footer() {
  return (
    <Box sx={footerContentStyle}>
      <Typography sx={titleStyle}>Contact</Typography>
      <Box sx={smallBoxStyle}>
        <Box
          sx={{
            display: "flex",
            flexDirection: "column",
            gap: "2.222vw",
          }}
        >
          <Box sx={inputsBoxStyle}>
            <Box
              sx={{
                ...bigInputBoxStyle,
                gap: "1.111vw",
              }}
            >
              <Typography sx={labelsStyle}>Phone</Typography>
              <TextField
                id="filled-read-only-input"
                defaultValue="+49 30 915-88492"
                variant="filled"
                sx={bigInputValueStyle}
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                ...smallInputBoxStyle,
                gap: "1.111vw",
              }}
            >
              <Typography sx={labelsStyle}>Socials</Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: "1.111vw",
                }}
              >
                <img
                  src={instaFooter}
                  alt="Instagram"
                  style={{
                    width: "2.986vw",
                  }}
                />
                <img
                  src={wasapFooter}
                  alt="WhatsApp"
                  style={{
                    width: "2.986vw",
                  }}
                />
              </Box>
            </Box>
          </Box>
          <Box sx={inputsBoxStyle}>
            <Box
              sx={{
                ...bigInputBoxStyle,
                height: "13.472vw",
                gap: "1.111vw",
              }}
            >
              <Typography sx={labelsStyle}>Address</Typography>
              <TextField
                id="filled-read-only-input"
                multiline
                defaultValue="Wallstraẞe 9-13, 10179 Berlin, Deutschland"
                variant="filled"
                sx={{
                  ...bigInputValueStyle,
                  "& .MuiInputBase-input": {
                    ...bigInputValueStyle["& .MuiInputBase-input"],
                    padding: 0,
                  },
                }}
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </Box>
            <Box
              sx={{
                ...smallInputBoxTwoStyle,
                gap: "1.111vw",
              }}
            >
              <Typography sx={labelsStyle}>Working Hours</Typography>
              <TextField
                id="filled-read-only-input"
                defaultValue="24 hours a day"
                variant="filled"
                sx={bigInputValueStyle}
                slotProps={{
                  input: {
                    readOnly: true,
                  },
                }}
              />
            </Box>
          </Box>
        </Box>
        <Box sx={mapBoxStyle}>
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4951.118281340109!2d13.35397298390374!3d52.501524085004995!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x47a84fb0e85329a1%3A0xa141f1e83418ee88!2sIT%20Career%20Hub!5e0!3m2!1sde!2sde!4v1788457977923!5m2!1sde!2sde"
            style={mapStyle}
            allowFullScreen
            loading="eager"
            referrerPolicy="strict-origin-when-cross-origin"
          />
        </Box>
      </Box>
    </Box>
  );
}

export default Footer;
