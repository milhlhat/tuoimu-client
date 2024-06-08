import React from 'react';

import { DatePicker } from '@mui/x-date-pickers';
import { Box, Stack, useTheme } from '@mui/system';
import { Link, Divider, Container, Typography } from '@mui/material';

import Iconify from 'src/components/iconify';

type Age = {
  age: number;
  traditionalAge: number;
};

const now = new Date();

const calculateAge = (inputDate: Date): Age => {
  let traditionalAge = 0;
  const age = now.getFullYear() - inputDate.getFullYear();
  if (inputDate.getMonth() >= 9 - 1) {
    traditionalAge = now.getFullYear() - inputDate.getFullYear();
  } else {
    traditionalAge = now.getFullYear() - inputDate.getFullYear() + 1;
  }

  return {
    age,
    traditionalAge,
  };
};

const getAutoIncreaseReviewsByDate = () => {
  const dateNow = new Date();
  const dateDiff = dateNow.getTime();
  const daysDiff = Math.floor(dateDiff / (1000 * 60 * 60 * 24));
  const reviews = Math.floor(daysDiff) - 15000;
  return reviews;
};

const renderHead = (
  <>
    <Stack direction="row" sx={{ mb: 3 }}>
      <Typography variant="h3" sx={{ flexGrow: 1 }}>
        Công cụ tính tuổi mụ online
      </Typography>
    </Stack>

    <Stack spacing={3} direction="row" flexWrap="wrap" alignItems="center">
      <Stack direction="row" alignItems="center" spacing={0.5} sx={{ typography: 'body2' }}>
        <Iconify icon="eva:star-fill" sx={{ color: 'warning.main' }} />
        <Box component="span" sx={{ typography: 'subtitle2' }}>
          {4.95}
        </Box>
        <Link sx={{ color: 'text.secondary' }}>({getAutoIncreaseReviewsByDate()} reviews)</Link>
      </Stack>
    </Stack>
  </>
);

const renderCaution = (
  <>
    <Typography variant="h6">Lưu ý khi sử dụng</Typography>
    <ul>
      <Typography component="li">
        Tuổi mụ chủ yếu được sử dụng trong các ngữ cảnh văn hóa, tôn giáo và tín ngưỡng.
      </Typography>
      <Typography component="li">
        Không nên nhầm lẫn tuổi mụ với tuổi thực khi điền vào các giấy tờ hành chính, hồ sơ y tế
        hoặc các tài liệu pháp lý.
      </Typography>
    </ul>
  </>
);

const renderCalculateInstructions = (
  <>
    <Typography variant="h6">Cách tính tuổi mụ</Typography>
    <ul>
      <Typography component="li">
        Nếu trẻ nhỏ chào đời vào khoảng từ tháng 9 cho đến cuối tháng 12 thì sẽ được tính trọn vẹn
        là 1 năm, vì thế sẽ có tuổi mụ bằng luôn với tuổi Dương.
      </Typography>
      <Typography component="li">
        Nếu trẻ nhỏ sinh ra trong khoảng tháng 1 đến trước tháng 9 thì sẽ được cộng thêm 1 tuổi vào
        tuổi Dương (tuổi thực) để làm tuổi mụ, vì trong trường hợp này, thai nhi đã được hình thành
        từ năm trước đó.
      </Typography>
    </ul>
  </>
);

const dueToMonthLessThanSeptember = (
  <Typography>
    <i>
      Do tháng sinh của bạn nhỏ hơn tháng 9, nên tuổi mụ của bạn sẽ được cộng thêm 1 năm vào tuổi
      dương.
    </i>
  </Typography>
);

const dueToMonthGreaterThanSeptember = (
  <Typography>
    <i>Do tháng sinh của bạn lớn hơn hoặc bằng tháng 9, nên tuổi mụ của bạn sẽ bằng tuổi dương.</i>
  </Typography>
);
const KEY_WORDS: string[] = [
  'Cách tính tuổi mụ chi tiết nhất',
  'Tuổi mụ là gì',
  'Tuổi mụ online',
  'Tuổi mụ công cụ',
  'Tuổi mụ chính xác nhất',
  'Tuổi mụ đúng nhất',
  'Tuổi mụ online chính xác',
  'Tuổi mụ online miễn phí',
  'Tuổi mụ online nhanh chóng',
  'Tuổi mụ online dễ dàng',
  'Tuổi mụ online dễ hiểu',
  'Tuổi mụ online tại nhà',
  'Tuổi mụ online nhanh nhất',
  'Tuổi mụ online chính xác nhất',
  'Tuổi mụ online dễ sử dụng',
  'Tuổi mụ online tại nhà',
  'Tuổi mụ online trực tuyến',
  'Tuổi mụ online vạn niên',
  'Tuổi mụ online mới nhất',
  'Tuổi mụ online nhanh nhất',
  'Tuổi mụ online dễ sử dụng',
  'Tuổi mụ online tại nhà',
  'Tuổi mụ online trực tuyến',
];
const renderKeyWords = (
  <Stack>
    <Typography variant="h6">Từ khóa</Typography>
    <Stack spacing={1}>
      {KEY_WORDS.map((keyword) => (
        <Link
          key={keyword}
          variant="body2"
          sx={{
            cursor: 'pointer',
          }}
          component="a"
          target="_blank"
          href={`https://www.google.com/search?q=tuoimu.com ${keyword}`}
        >
          #{keyword}
        </Link>
      ))}
    </Stack>
  </Stack>
);

export default function LandingView() {
  const [date, setDate] = React.useState<Date | null>(() => {
    const initialDate = new Date();
    initialDate.setFullYear(initialDate.getFullYear() - 18);
    return initialDate;
  });

  const [age, setAge] = React.useState<Age>(calculateAge(date!));

  const changeDate = (newDate: Date | null) => {
    setDate(newDate);
    setAge(calculateAge(newDate!));
  };
  const theme = useTheme();
  console.log(theme.palette.mode);
  const bgLight = 'url(https://i.imgur.com/E7Dr7Mt.jpg)';
  const bgDark =
    'linear-gradient(rgba(22, 28, 36, 0.64) 0%, rgba(22, 28, 36, 0.64) 100%) center center / cover no-repeat, url(https://api-prod-minimal-v510.vercel.app/assets/images/cover/cover_19.jpg)';

  const renderTopBar = (
    <Stack
      sx={{
        background: theme.palette.mode === 'dark' ? bgDark : bgLight,
        height: 'fit-content',
        backgroundColor: 'rgba(0, 0, 0, 0.5)',

        backgroundSize: 'cover',
        backgroundPosition: 'center',
        backgroundRepeat: 'no-repeat',
        padding: 5,
      }}
    >
      <Typography
        variant="h6"
        sx={{
          mb: 3,
          color: 'white',
          backgroundColor: 'rgba(0, 0, 0, 0.5)',
          padding: 2,
          borderRadius: 1,
          backdropFilter: 'blur(4px)',
        }}
      >
        Tuổi mụ là một khái niệm trong văn hóa Á Đông, đặc biệt phổ biến ở Việt Nam, dùng để chỉ
        tuổi của một người bao gồm cả thời gian nằm trong bụng mẹ. Khái niệm này thường được sử dụng
        trong các dịp lễ tết, đám cưới, và các sự kiện quan trọng khác để tính toán vận mệnh và số
        mệnh của một người theo lịch âm.
      </Typography>
    </Stack>
  );

  return (
    <Stack>
      {renderTopBar}
      <Container maxWidth={false}>
        <Stack sx={{ maxWidth: 720, mx: 'auto', marginTop: 8 }}>
          {renderHead}

          <Divider sx={{ borderStyle: 'dashed', my: 5 }} />

          <DatePicker
            label="Chọn ngày sinh âm lịch của bạn"
            value={date}
            format="MM/yyyy"
            onChange={(newValue) => {
              changeDate(newValue);
            }}
            slotProps={{
              textField: {
                fullWidth: true,
              },
            }}
            views={['month', 'year']}
          />

          <Divider sx={{ borderStyle: 'dashed', my: 5 }} />
          <Typography variant="h6">Kết quả</Typography>
          <Typography>
            Tuổi mụ của bạn là: <strong> {age.traditionalAge} tuổi</strong>
          </Typography>
          {age.traditionalAge > age.age
            ? dueToMonthLessThanSeptember
            : dueToMonthGreaterThanSeptember}

          <Divider sx={{ borderStyle: 'dashed', my: 5 }} />
          {renderCalculateInstructions}

          <Divider sx={{ borderStyle: 'dashed', my: 5 }} />
          {renderCaution}

          <Divider sx={{ borderStyle: 'dashed', my: 5 }} />
          {renderKeyWords}
        </Stack>
      </Container>
    </Stack>
  );
}
