
import {
    RadioGroup,
    Radio,
    Box,
    Typography,
    FormControlLabel,
    createStyles,
    TextField,
    MenuItem,
    Grid,
    Button,
    Link,
    InputAdornment,
    Icon
} from '@material-ui/core';
import { withStyles, makeStyles } from '@material-ui/core/styles';
import { Link as RouteLink } from 'react-router-dom';

const tomato = " #f15642"
const currencies = [
    {
        value: 'USD',
        label: '$',
    },
    {
        value: 'EUR',
        label: '€',
    },
    {
        value: 'BTC',
        label: '฿',
    },
    {
        value: 'JPY',
        label: '¥',
    },
],
    language = [
        {
            value: '한국어',
            label: '한국어',
        },
        {
            value: '영어',
            label: 'English',
        },
    ];


const GreenRadio = withStyles({
    root: {
        color: tomato,
        '&$checked': {
            color: tomato,

        },
    },
    checked: {},
})((props) => <Radio color="default" {...props} />);

const RadioStyles = createStyles({
    formControlLabel: {
        fontFamily: "Arial-BoldMT",
        fontSize: '14px',

    },
    formControlLabelChecked: {
        fontFamily: "Arial-BoldMT",
        fontSize: '14px',
        fontWeight: "bold"
    },

});

const InputBoxes = withStyles({
    root: {
        '& input + fieldset': {
            borderColor: "#7d8184",

            opacity: 0.5,
        },
    },
})(TextField)

const Title = {
    style: {
        fontFamily: "Arial", height: "29px", color: "#2f2f2f", fontSize: "24px", fontWeight: "bold", marginBottom: "13px",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
    }
};

const SubTitle = {
    style: {
        fontSize: "14px",
        fontWeight: "normal",
        fontStretch: "normal",
        fontStyle: "normal",
        lineHeight: "normal",
        letterSpacing: "normal",
        marginBottom: "18px",
        fontFamily: "ArialMT",
    }
}

const useStyles = makeStyles((theme) => ({

    inputBox: {
        '& .MuiSelect-icon': {
            width: "0px",
            height: "0px",
            borderTop: "16px solid #000000",
            borderRight: "8px solid  transparent",
            borderLeft: "8px solid  transparent",
            marginRight: "6px",
            top: "calc(50% - 8px)",
        },
        '& .MuiFormControl-root': {
            marginBottom: "45px",
        },
        '& .MuiTextField-root': {
            fontFamily: "Roboto",
            color: " rgba(0, 0, 0, 0.6)",
            fontSize: "16px",
            letterSpacing: "0.15px",
        },
        '& .MuiOutlinedInput-root': {
            width: "440px",
            height: "55px",
            borderColor: "#7d8184",
            opacity: "0.5",
        },
        '& .MuiFormHelperText-root': {
            position: "absolute",
            width: "100%",
            top: "61px",
            color: "#ff0000",
            fontFamily: "AppleSDGothicNeo",
            marginLeft: "10px",
            marginTop: "0px",
            fontSize: "10px",
        },
        '& .MuiInputAdornment-positionEnd': {
            position: "absolute",
            right: "13.5px",
            width: "16px",
            height: "16.5px",
            backgroundColor: "#ffffff",
            margin: "0px",
            opacity: "1",
            top: "calc(50% - 8.3px)",
            zIndex: "0",

        },
        '& .MuiOutlinedInput-adornedEnd': {
            paddingRight: "9px"

        },
        '& .material-icons': {
            width: "0px",
            height: "0px",
            borderTop: "16px solid #000000",
            borderRight: "8px solid  transparent",
            borderLeft: "8px solid  transparent",
        },
        '& .MuiLink-root': {
            color: "rgba(0, 0, 0, 0.6) !important",

        }

    },
    LanguageBox: {
        '& .MuiInput-underline': {
            borderBottom: "none",
            width: "51px",
            height: "18px",
            margin: "6px 512px 0 22px",
            fontFamily: "NotoSansCJKkr",
            fontSize: "12px",
            color: "#000000",
        },
        '& .MuiSelect-select': {
            marginRight: "0",
            paddingRight: "0"
        },
        '& .MuiSelect-icon': {
            width: "0px",
            height: "0px",
            borderTop: "8px solid #000000",
            borderRight: "4px solid  transparent",
            borderLeft: "4px solid  transparent",
            top: "calc(50% - 2.5px)",

        },
        '& .MuiInput-underline:before': {
            borderBottom: "none"
        },

    },
    button: {
        width: "91px",
        height: "37px",
        margin: "0 6.4px 0 0",
        borderRadius: "4px",
        backgroundColor: tomato,
        color: "#ffffff",
    },
    login: {
        width: "42px",
        height: "19px",
        margin: "33px 30.4px 9px 16px",
        fontFamily: "Roboto",
        fontSize: "16px",
        letterSpacing: "0.15px",
    }

}));



const SignupPresenter = ({ errorValue, radioChange, radioValue, userValue, setEmail, setPassword, setCompanyName, setMoney, setDate, signupClick, Language, changeLanguage, textLanguage }) => {
    const classes = useStyles();
    return (
        <Box style={{
            width: "585px",
            height: "794px",
            margin: "0 0 6px",
            borderRadius: " 11px",
            border: "solid 1px #dadce0",
        }} >
            <Grid container
                direction="column"
                justify="center"
                alignItems="stretch"
                style={{
                    padding: "68px 41px 34px 73px",
                }}

            >
                <Box paddingLeft="5px">
                    <Typography {...Title} >{textLanguage.title}</Typography>
                    <Typography {...SubTitle}>{textLanguage.subTitle}</Typography>
                    <RadioGroup row aria-label="type" name="type" value={radioValue} onChange={radioChange}>
                        <FormControlLabel
                            value="번역회사"
                            control={<GreenRadio />}
                            label={<Typography style={radioValue && radioValue === "번역회사" ? RadioStyles.formControlLabelChecked : RadioStyles.formControlLabel}>{textLanguage.translationCompany}</Typography>}
                        />
                        <FormControlLabel
                            value="의뢰인"
                            control={<GreenRadio />}
                            label={<Typography
                                style={radioValue && radioValue === "의뢰인" ? RadioStyles.formControlLabelChecked : RadioStyles.formControlLabel}>{textLanguage.client}</Typography>}
                        />
                        <FormControlLabel
                            value="번역가"
                            control={<GreenRadio />}
                            label={<Typography
                                style={radioValue && radioValue === "번역가" ? RadioStyles.formControlLabelChecked : RadioStyles.formControlLabel}>{textLanguage.translator}</Typography>}
                        />
                    </RadioGroup>
                    <Typography style={{ fontSize: "12px", fontFamily: "NotoSansCJKkr-Regular", color: "#000000", marginBottom: "8px", marginTop: "12.5px" }} >{textLanguage.basicInformation}</Typography>

                </Box>

                <Grid container
                    direction="column"
                    justify="center"
                    alignItems="stretch"
                    className={classes.inputBox}
                >
                    <InputBoxes
                        id="outlined-basic"
                        label={textLanguage.email}
                        variant="outlined"
                        value={userValue.Email}
                        onChange={setEmail}
                        helperText={errorValue.Email ? textLanguage.emailHelper : ""}
                        error={errorValue.Email}
                    />

                    <InputBoxes
                        id="outlined-basic"
                        label={textLanguage.password}
                        variant="outlined"
                        type="password"
                        value={userValue.password}
                        onChange={setPassword}
                        helperText={errorValue.password ? textLanguage.passwordHelper : ""}
                        error={errorValue.password}
                    />

                    <InputBoxes
                        id="outlined-basic"
                        label={textLanguage.companyName}
                        value={userValue.companyName}
                        onChange={setCompanyName}
                        variant="outlined"
                        helperText={errorValue.companyName ? textLanguage.requiredValue : ""}
                        error={errorValue.companyName}
                    />


                    <TextField
                        id="outlined-select-currency"
                        select
                        label={textLanguage.enterCurrency}
                        onChange={setMoney}
                        helperText={errorValue.money ? textLanguage.requiredValue : ""}
                        fontSize={16}
                        variant="outlined"
                        error={errorValue.money}
                    >
                        {currencies.map((option) => (
                            <MenuItem key={option.value} value={option.value}>
                                {option.label}
                            </MenuItem>
                        ))}
                    </TextField>

                    <TextField
                        rightIcon
                        id="date"
                        label={textLanguage.date}
                        helperText={errorValue.date ? textLanguage.requiredValue : ""}
                        type="date"
                        onChange={setDate}
                        variant="outlined"
                        InputLabelProps={{
                            shrink: true,
                        }}
                        InputProps={{
                            endAdornment: (
                                <InputAdornment position="end"><Icon /></InputAdornment>
                            )
                        }}
                        error={errorValue.date}

                    />
                    <Grid >
                        <Button className={classes.button} onClick={signupClick}>
                            {textLanguage.next}
                        </Button>

                        <RouteLink to="/Login"><Link underline="always" className={classes.login}>{textLanguage.login}</Link></RouteLink>

                    </Grid>

                </Grid>

            </Grid >
            <TextField
                id="outlined-select-currency"
                select
                onChange={changeLanguage}
                value={Language}
                fontSize={12}
                className={classes.LanguageBox}
            >
                {language.map((option) => (
                    <MenuItem key={option.value} value={option.value}>
                        {option.label}
                    </MenuItem>
                ))}
            </TextField>
        </Box>


    )
}


export default (SignupPresenter);