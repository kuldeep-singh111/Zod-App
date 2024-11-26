import { Button, Stack, Typography } from "@mui/material";
import { useNavigate } from "react-router-dom";

const Error = () => {
    const navigate = useNavigate();

    return (
        <>
            <Stack
                width={"100%"}
                height={"100vh"}
                flexDirection={"row"}
                justifyContent={"center"}
                alignItems={"center"}
                sx={{
                    background: 'url("/error.png")',
                    backgroundRepeat: "no-repeat",
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >
                <Stack
                    p={3}
                    bgcolor={"gray"}
                    borderRadius={"6px"}
                    flexDirection={"column"}
                    alignItems={"center"}
                    gap={2}
                    boxShadow={"30px 2px 1px 10px white"}
                >
                    <Typography variant="h3">OOP`s</Typography>
                    <Typography variant="h6">You entered wrong location !</Typography>
                    <Button

                        sx={{
                            bgcolor: "DarkSlateGrey",
                            color: "white",
                            borderRadius: "10px",
                            p: 2,
                            ":hover": {
                                bgcolor: "DarkSeaGreen",
                                cursor: "pointer",
                            },
                        }}
                        onClick={() => navigate(-1)}
                    >
                        Go Back
                    </Button>
                </Stack>
            </Stack>
        </>
    );
};
export default Error;