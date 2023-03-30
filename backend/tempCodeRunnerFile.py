import emailOTP

otp = emailOTP.genOtp()

receiver = "maxmillar1212@gmail.com"

emailOTP.sendOtp(receiver, otp)