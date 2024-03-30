import Link from "next/link";
import { about, digitalfirst, insights } from "@/constants";
import InstagramIcon from "@mui/icons-material/Instagram";
import FacebookIcon from "@mui/icons-material/Facebook";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import EmailIcon from "@mui/icons-material/Email";

export function Footer() {
  return (
    <div className="w-auto bg-white max-w-full overflow-hidden flex flex-col items-start justify-start pt-[27px] px-20 pb-[18px] box-border gap-[8.5px] tracking-[normal] mq1025:pl-10 mq1025:pr-10 mq1025:box-border">
      <div className="w-[77px] h-11 hidden" />
      <section className="w-[1468px] flex flex-row items-start justify-between max-w-full gap-[20px] text-left text-mini text-black font-montserrat mq1125:flex-wrap">
        <div className="flex flex-row items-start justify-start gap-[88.5px] max-w-full mq450:gap-[88.5px_22px] mq750:gap-[88.5px_44px] mq1025:flex-wrap">
          <div className="w-[187px] flex flex-col items-start justify-start gap-[1.8999999999999773px]">
            <div className="relative tracking-[-0.01em] leading-[24px] font-extrabold inline-block min-w-[57px]">
              ABOUT
            </div>
            <div className="self-stretch h-[191px] relative tracking-[-0.01em] leading-[24px] inline-block z-[1]">
              <ul className="m-0 font-inherit text-inherit pl-5">
                {about.map((item) => (
                  <div key={item.title}>
                    <li className="mb-0">
                      <div className="text-[inherit] flex flex-col gap-0">
                        {item.links.map((link) => (
                          <Link key={link.title} href={link.url}>
                            <span className="[text-decoration:underline]">
                              {link.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
          <div className="w-[216px] flex flex-col items-start justify-start pt-[1.7999999999999543px] px-0 pb-0 box-border">
            <div className="self-stretch flex flex-col items-start justify-start gap-[3.7000000000000455px]">
              <div className="w-[114px] h-5 relative tracking-[-0.01em] leading-[24px] font-extrabold inline-block">
                <p className="[margin-block-start:0] [margin-block-end:18px]">
                  DIGIRAL FIRST
                </p>
              </div>
              <div className="self-stretch h-[215.1px] relative tracking-[-0.01em] leading-[24px] inline-block shrink-0 z-[1]">
                <ul className="m-0 font-inherit text-inherit pl-5">
                  {digitalfirst.map((item) => (
                    <div key={item.title}>
                      <li className="mb-0">
                        <div className="text-[inherit] flex flex-col gap-0">
                          {item.links.map((link) => (
                            <Link key={link.title} href={link.url}>
                              <span className="[text-decoration:underline]">
                                {link.title}
                              </span>
                            </Link>
                          ))}
                        </div>
                      </li>
                    </div>
                  ))}
                </ul>
              </div>
            </div>
          </div>
          <div className="w-[148px] flex flex-col items-start justify-start gap-[1.3999999999999773px]">
            <div className="relative tracking-[-0.01em] leading-[24px] font-extrabold inline-block min-w-[74px]">
              INSIGHTS
            </div>
            <div className="self-stretch h-[95px] relative tracking-[-0.01em] leading-[24px] inline-block z-[1]">
              <ul className="m-0 font-inherit text-inherit pl-5">
                {insights.map((item) => (
                  <div key={item.title}>
                    <li className="mb-0">
                      <div className="text-[inherit] flex flex-col gap-0">
                        {item.links.map((link) => (
                          <Link key={link.title} href={link.url}>
                            <span className="[text-decoration:underline]">
                              {link.title}
                            </span>
                          </Link>
                        ))}
                      </div>
                    </li>
                  </div>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="w-[215px] flex flex-col items-start justify-start pt-[84px] px-0 pb-0 box-border text-right text-gray-200">
          <div className="self-stretch flex flex-row items-end justify-start gap-[9px]">
            <div className="flex-1 flex flex-col items-start justify-start gap-[4px]">
              <div className="w-32 relative tracking-[-0.01em] leading-[24px] inline-block min-w-[128px]">
                FOLLOW US ON
              </div>
              <div className="self-stretch flex flex-row items-start justify-start py-0 pr-0 pl-3">
                <div className="h-[46px] flex-1 flex flex-row items-start justify-start gap-[9px]">
                  <div className="h-[46px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <LinkedInIcon />
                  </div>
                  <div className="h-[46px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <InstagramIcon />
                  </div>
                  <div className="h-[46px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <FacebookIcon />
                  </div>
                  <div className="h-[46px] flex flex-col items-start justify-start pt-0.5 px-0 pb-0 box-border">
                    <EmailIcon />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
      <section className="self-stretch flex flex-col items-start justify-start gap-[16px] max-w-full text-center text-9xl-4 text-black font-comfortaa">
        <div className="self-stretch flex flex-row flex-wrap items-start justify-start gap-[10px] max-w-full">
          <div className="flex-1 flex flex-col items-start justify-start pt-4 px-0 pb-0 box-border min-w-[464px] max-w-full mq750:min-w-full">
            <div className="self-stretch h-px relative bg-gray-100" />
          </div>
          <div className="w-[72px] flex flex-row items-start justify-start gap-[7px]">
            <div className="h-[25.5px] flex flex-col items-start justify-start pt-[3px] px-0 pb-0 box-border">
              <img
                className="w-[13.3px] h-[22.5px] relative object-contain z-[1]"
                loading="lazy"
                alt=""
                src="/union@2x.png"
              />
            </div>
            <div className="flex-1 relative tracking-[-0.01em] mq450:text-4xl">
              <img
                className="w-11 h-11 relative"
                loading="lazy"
                alt=""
                src="/Logo2.png"
              />
            </div>
          </div>
          <div className="flex-1 flex flex-col items-start justify-start pt-[13px] px-0 pb-0 box-border min-w-[464px] max-w-full mq750:min-w-full">
            <div className="self-stretch h-px relative bg-gray-100" />
          </div>
        </div>
        <div className="w-[1506px] flex flex-row items-start justify-between gap-[20px] max-w-full text-left text-mini text-gray-200 font-montserrat mq750:flex-wrap mq750:justify-center">
          <div className="w-[301px] flex flex-col items-start justify-start pt-[11px] px-0 pb-0 box-border">
            <div className="self-stretch relative tracking-[-0.01em] leading-[24px]">
              © Prime, Inc. 2024. We love our users!
            </div>
          </div>
          <div className="h-7 w-[290px] relative tracking-[-0.01em] leading-[24px] inline-block shrink-0">
            <a
              className="text-[inherit] whitespace-pre-wrap"
              href="https://www.ril.com/privacy-policy"
              target="_blank"
            >
              <span className="[text-decoration:underline]">
                Privacy Policy
              </span>
            </a>
            {` `}
            <a
              className="text-[inherit] whitespace-pre-wrap"
              href="https://www.ril.com/legal-notice"
              target="_blank"
            >
              <span className="[text-decoration:underline]"> Notice</span>
            </a>
            {` `}
            <a
              className="text-[inherit] whitespace-pre-wrap"
              href="mailto:infosecurity.alerts@zmail.ril.com"
              target="_blank"
            >
              <span className="[text-decoration:underline]">
                {" "}
                Security Issue
              </span>
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}
