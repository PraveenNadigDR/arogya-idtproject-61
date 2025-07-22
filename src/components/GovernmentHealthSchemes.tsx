import { useState } from "react";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { 
  ExternalLink, 
  Heart, 
  Shield, 
  Users, 
  Baby, 
  Eye, 
  Activity,
  ChevronRight,
  Info,
  Globe
} from "lucide-react";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

interface GovernmentHealthSchemesProps {
  language: string;
}

const GovernmentHealthSchemes = ({ language }: GovernmentHealthSchemesProps) => {
  const [selectedScheme, setSelectedScheme] = useState(null);

  const text = {
    en: {
      title: "Government Health Schemes",
      subtitle: "Access various government health programs and initiatives",
      viewDetails: "View Details",
      visitWebsite: "Visit Website",
      eligibility: "Eligibility",
      benefits: "Benefits",
      howToApply: "How to Apply",
      contact: "Contact Information",
      launched: "Launched",
      ministry: "Ministry"
    },
    kn: {
      title: "ಸರ್ಕಾರಿ ಆರೋಗ್ಯ ಯೋಜನೆಗಳು",
      subtitle: "ವಿವಿಧ ಸರ್ಕಾರಿ ಆರೋಗ್ಯ ಕಾರ್ಯಕ್ರಮಗಳು ಮತ್ತು ಉಪಕ್ರಮಗಳನ್ನು ಪ್ರವೇಶಿಸಿ",
      viewDetails: "ವಿವರಗಳನ್ನು ನೋಡಿ",
      visitWebsite: "ವೆಬ್‌ಸೈಟ್‌ಗೆ ಭೇಟಿ ನೀಡಿ",
      eligibility: "ಅರ್ಹತೆ",
      benefits: "ಪ್ರಯೋಜನಗಳು",
      howToApply: "ಅರ್ಜಿ ಹೇಗೆ ಸಲ್ಲಿಸುವುದು",
      contact: "ಸಂಪರ್ಕ ಮಾಹಿತಿ",
      launched: "ಪ್ರಾರಂಭವಾಗಿದೆ",
      ministry: "ಸಚಿವಾಲಯ"
    }
  };

  const schemes = [
    {
      id: 1,
      name: {
        en: "eSanjeevani - National Telemedicine Service",
        kn: "ಇಸಂಜೀವನಿ - ರಾಷ್ಟ್ರೀಯ ಟೆಲಿಮೆಡಿಸಿನ್ ಸೇವೆ"
      },
      icon: <Activity className="h-6 w-6" />,
      website: "https://esanjeevani.in",
      launched: "2019",
      ministry: {
        en: "Ministry of Health & Family Welfare",
        kn: "ಆರೋಗ್ಯ ಮತ್ತು ಕುಟುಂಬ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ"
      },
      description: {
        en: "Free online medical consultation with doctors",
        kn: "ವೈದ್ಯರೊಂದಿಗೆ ಉಚಿತ ಆನ್‌ಲೈನ್ ವೈದ್ಯಕೀಯ ಸಲಹೆ"
      },
      eligibility: {
        en: ["All Indian citizens", "No age restrictions", "Internet connection required"],
        kn: ["ಎಲ್ಲಾ ಭಾರತೀಯ ನಾಗರಿಕರು", "ವಯಸ್ಸಿನ ನಿರ್ಬಂಧವಿಲ್ಲ", "ಇಂಟರ್ನೆಟ್ ಸಂಪರ್ಕ ಅಗತ್ಯ"]
      },
      benefits: {
        en: ["Free video consultation", "24/7 availability", "Prescription download", "Follow-up consultations"],
        kn: ["ಉಚಿತ ವೀಡಿಯೊ ಸಲಹೆ", "24/7 ಲಭ್ಯತೆ", "ಪ್ರಿಸ್ಕ್ರಿಪ್ಶನ್ ಡೌನ್‌ಲೋಡ್", "ಫಾಲೋ-ಅಪ್ ಸಲಹೆಗಳು"]
      },
      howToApply: {
        en: ["Visit esanjeevani.in", "Register with mobile number", "Select doctor specialty", "Book appointment"],
        kn: ["esanjeevani.in ಗೆ ಭೇಟಿ ನೀಡಿ", "ಮೊಬೈಲ್ ಸಂಖ್ಯೆಯೊಂದಿಗೆ ನೋಂದಾಯಿಸಿ", "ವೈದ್ಯರ ವಿಶೇಷತೆಯನ್ನು ಆಯ್ಕೆಮಾಡಿ", "ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್ ಬುಕ್ ಮಾಡಿ"]
      },
      contact: {
        en: "Helpline: 14567 | Email: esanjeevani@nha.gov.in",
        kn: "ಸಹಾಯವಾಣಿ: 14567 | ಇಮೇಲ್: esanjeevani@nha.gov.in"
      }
    },
    {
      id: 2,
      name: {
        en: "Fit India Movement",
        kn: "ಫಿಟ್ ಇಂಡಿಯಾ ಚಳುವಳಿ"
      },
      icon: <Heart className="h-6 w-6" />,
      website: "https://fitindia.gov.in",
      launched: "2019",
      ministry: {
        en: "Ministry of Youth Affairs & Sports",
        kn: "ಯುವ ವ್ಯವಹಾರಗಳು ಮತ್ತು ಕ್ರೀಡಾ ಸಚಿವಾಲಯ"
      },
      description: {
        en: "National fitness campaign promoting healthy lifestyle",
        kn: "ಆರೋಗ್ಯಕರ ಜೀವನಶೈಲಿಯನ್ನು ಉತ್ತೇಜಿಸುವ ರಾಷ್ಟ್ರೀಯ ಫಿಟ್ನೆಸ್ ಅಭಿಯಾನ"
      },
      eligibility: {
        en: ["All age groups", "Schools and colleges", "Government employees", "General public"],
        kn: ["ಎಲ್ಲಾ ವಯೋಮಾನದವರು", "ಶಾಲೆಗಳು ಮತ್ತು ಕಾಲೇಜುಗಳು", "ಸರ್ಕಾರಿ ನೌಕರರು", "ಸಾಮಾನ್ಯ ಜನರು"]
      },
      benefits: {
        en: ["Free fitness programs", "Health awareness campaigns", "Sports equipment access", "Fitness tracking tools"],
        kn: ["ಉಚಿತ ಫಿಟ್ನೆಸ್ ಕಾರ್ಯಕ್ರಮಗಳು", "ಆರೋಗ್ಯ ಜಾಗೃತಿ ಅಭಿಯಾನಗಳು", "ಕ್ರೀಡಾ ಸಲಕರಣೆ ಪ್ರವೇಶ", "ಫಿಟ್ನೆಸ್ ಟ್ರ್ಯಾಕಿಂಗ್ ಸಾಧನಗಳು"]
      },
      howToApply: {
        en: ["Download Fit India app", "Register online", "Join local programs", "Participate in events"],
        kn: ["ಫಿಟ್ ಇಂಡಿಯಾ ಅಪ್ಲಿಕೇಶನ್ ಡೌನ್‌ಲೋಡ್ ಮಾಡಿ", "ಆನ್‌ಲೈನ್ ನೋಂದಾಯಿಸಿ", "ಸ್ಥಳೀಯ ಕಾರ್ಯಕ್ರಮಗಳಿಗೆ ಸೇರಿ", "ಈವೆಂಟ್‌ಗಳಲ್ಲಿ ಭಾಗವಹಿಸಿ"]
      },
      contact: {
        en: "Website: fitindia.gov.in | Social: @FitIndiaOff",
        kn: "ವೆಬ್‌ಸೈಟ್: fitindia.gov.in | ಸಾಮಾಜಿಕ: @FitIndiaOff"
      }
    },
    {
      id: 3,
      name: {
        en: "Pradhan Mantri Jan Arogya Yojana (Ayushman Bharat)",
        kn: "ಪ್ರಧಾನ ಮಂತ್ರಿ ಜನ ಆರೋಗ್ಯ ಯೋಜನೆ (ಆಯುಷ್ಮಾನ್ ಭಾರತ್)"
      },
      icon: <Shield className="h-6 w-6" />,
      website: "https://pmjay.gov.in",
      launched: "2018",
      ministry: {
        en: "Ministry of Health & Family Welfare",
        kn: "ಆರೋಗ್ಯ ಮತ್ತು ಕುಟುಂಬ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ"
      },
      description: {
        en: "Health insurance scheme covering 5 lakh rupees per family",
        kn: "ಪ್ರತಿ ಕುಟುಂಬಕ್ಕೆ 5 ಲಕ್ಷ ರೂಪಾಯಿಗಳ ಆರೋಗ್ಯ ವಿಮಾ ಯೋಜನೆ"
      },
      eligibility: {
        en: ["BPL families", "SECC 2011 beneficiaries", "Rural and urban poor", "Vulnerable groups"],
        kn: ["BPL ಕುಟುಂಬಗಳು", "SECC 2011 ಫಲಾನುಭವಿಗಳು", "ಗ್ರಾಮೀಣ ಮತ್ತು ನಗರ ಬಡವರು", "ದುರ್ಬಲ ಗುಂಪುಗಳು"]
      },
      benefits: {
        en: ["₹5 lakh coverage", "Cashless treatment", "Pre and post hospitalization", "1,393 procedures covered"],
        kn: ["₹5 ಲಕ್ಷ ರಕ್ಷಣೆ", "ನಗದುರಹಿತ ಚಿಕಿತ್ಸೆ", "ಆಸ್ಪತ್ರೆಯ ಮೊದಲು ಮತ್ತು ನಂತರ", "1,393 ಕಾರ್ಯವಿಧಾನಗಳನ್ನು ಒಳಗೊಂಡಿದೆ"]
      },
      howToApply: {
        en: ["Check eligibility online", "Visit nearest hospital", "Verify documents", "Get Ayushman card"],
        kn: ["ಆನ್‌ಲೈನ್ ಅರ್ಹತೆ ಪರಿಶೀಲಿಸಿ", "ಹತ್ತಿರದ ಆಸ್ಪತ್ರೆಗೆ ಭೇಟಿ ನೀಡಿ", "ದಾಖಲೆಗಳನ್ನು ಪರಿಶೀಲಿಸಿ", "ಆಯುಷ್ಮಾನ್ ಕಾರ್ಡ್ ಪಡೆಯಿರಿ"]
      },
      contact: {
        en: "Helpline: 14555 | Website: pmjay.gov.in",
        kn: "ಸಹಾಯವಾಣಿ: 14555 | ವೆಬ್‌ಸೈಟ್: pmjay.gov.in"
      }
    },
    {
      id: 4,
      name: {
        en: "Rashtriya Bal Swasthya Karyakram (RBSK)",
        kn: "ರಾಷ್ಟ್ರೀಯ ಬಾಲ ಸ್ವಾಸ್ಥ್ಯ ಕಾರ್ಯಕ್ರಮ (RBSK)"
      },
      icon: <Baby className="h-6 w-6" />,
      website: "https://nhm.gov.in/index1.php?lang=1&level=2&sublinkid=818&lid=221",
      launched: "2013",
      ministry: {
        en: "Ministry of Health & Family Welfare",
        kn: "ಆರೋಗ್ಯ ಮತ್ತು ಕುಟುಂಬ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ"
      },
      description: {
        en: "Child health screening and early intervention services",
        kn: "ಮಕ್ಕಳ ಆರೋಗ್ಯ ಪರೀಕ್ಷೆ ಮತ್ತು ಆರಂಭಿಕ ಹಸ್ತಕ್ಷೇಪ ಸೇವೆಗಳು"
      },
      eligibility: {
        en: ["Children 0-18 years", "Government schools", "Anganwadi centers", "Rural and urban areas"],
        kn: ["0-18 ವರ್ಷಗಳ ಮಕ್ಕಳು", "ಸರ್ಕಾರಿ ಶಾಲೆಗಳು", "ಅಂಗನವಾಡಿ ಕೇಂದ್ರಗಳು", "ಗ್ರಾಮೀಣ ಮತ್ತು ನಗರ ಪ್ರದೇಶಗಳು"]
      },
      benefits: {
        en: ["Free health screening", "Early defect detection", "Free treatment", "Follow-up services"],
        kn: ["ಉಚಿತ ಆರೋಗ್ಯ ಪರೀಕ್ಷೆ", "ಆರಂಭಿಕ ದೋಷ ಪತ್ತೆ", "ಉಚಿತ ಚಿಕಿತ್ಸೆ", "ಫಾಲೋ-ಅಪ್ ಸೇವೆಗಳು"]
      },
      howToApply: {
        en: ["Available at schools", "Visit health centers", "Contact ASHA workers", "District health office"],
        kn: ["ಶಾಲೆಗಳಲ್ಲಿ ಲಭ್ಯ", "ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳಿಗೆ ಭೇಟಿ ನೀಡಿ", "ಆಶಾ ಕಾರ್ಯಕರ್ತರನ್ನು ಸಂಪರ್ಕಿಸಿ", "ಜಿಲ್ಲಾ ಆರೋಗ್ಯ ಕಛೇರಿ"]
      },
      contact: {
        en: "Contact: District Health Officer | NHM Portal",
        kn: "ಸಂಪರ್ಕ: ಜಿಲ್ಲಾ ಆರೋಗ್ಯ ಅಧಿಕಾರಿ | NHM ಪೋರ್ಟಲ್"
      }
    },
    {
      id: 5,
      name: {
        en: "National Programme for Prevention & Control of Cancer, Diabetes, CVD & Stroke (NPCDCS)",
        kn: "ಕ್ಯಾನ್ಸರ್, ಮಧುಮೇಹ, ಹೃದ್ರೋಗ ಮತ್ತು ಪಾರ್ಶ್ವವಾಯು ತಡೆಗಟ್ಟುವಿಕೆ ಮತ್ತು ನಿಯಂತ್ರಣಕ್ಕಾಗಿ ರಾಷ್ಟ್ರೀಯ ಕಾರ್ಯಕ್ರಮ (NPCDCS)"
      },
      icon: <Heart className="h-6 w-6" />,
      website: "https://main.mohfw.gov.in/Major-Programmes/non-communicable-diseases-injury-trauma/Non-Communicable-Disease-II",
      launched: "2010",
      ministry: {
        en: "Ministry of Health & Family Welfare",
        kn: "ಆರೋಗ್ಯ ಮತ್ತು ಕುಟುಂಬ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ"
      },
      description: {
        en: "Prevention and control of non-communicable diseases",
        kn: "ಸಾಂಕ್ರಾಮಿಕವಲ್ಲದ ರೋಗಗಳ ತಡೆಗಟ್ಟುವಿಕೆ ಮತ್ತು ನಿಯಂತ್ರಣ"
      },
      eligibility: {
        en: ["Adults above 30 years", "High-risk individuals", "Family history cases", "All government facilities"],
        kn: ["30 ವರ್ಷಕ್ಕಿಂತ ಮೇಲ್ಪಟ್ಟ ವಯಸ್ಕರು", "ಹೆಚ್ಚಿನ ಅಪಾಯದ ವ್ಯಕ್ತಿಗಳು", "ಕುಟುಂಬ ಇತಿಹಾಸದ ಪ್ರಕರಣಗಳು", "ಎಲ್ಲಾ ಸರ್ಕಾರಿ ಸೌಲಭ್ಯಗಳು"]
      },
      benefits: {
        en: ["Free screening", "Early detection", "Treatment support", "Lifestyle counseling"],
        kn: ["ಉಚಿತ ಸ್ಕ್ರೀನಿಂಗ್", "ಆರಂಭಿಕ ಪತ್ತೆ", "ಚಿಕಿತ್ಸಾ ಬೆಂಬಲ", "ಜೀವನಶೈಲಿ ಸಲಹೆ"]
      },
      howToApply: {
        en: ["Visit primary health centers", "District hospitals", "Community health centers", "Regular health camps"],
        kn: ["ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳಿಗೆ ಭೇಟಿ ನೀಡಿ", "ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆಗಳು", "ಸಮುದಾಯ ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳು", "ನಿಯಮಿತ ಆರೋಗ್ಯ ಶಿಬಿರಗಳು"]
      },
      contact: {
        en: "Contact: State NCD Cell | District Health Office",
        kn: "ಸಂಪರ್ಕ: ರಾಜ್ಯ NCD ಸೆಲ್ | ಜಿಲ್ಲಾ ಆರೋಗ್ಯ ಕಛೇರಿ"
      }
    },
    {
      id: 6,
      name: {
        en: "National Programme for Control of Blindness & Visual Impairment (NPCB&VI)",
        kn: "ಕುರುಡುತನ ಮತ್ತು ದೃಷ್ಟಿ ದೌರ್ಬಲ್ಯ ನಿಯಂತ್ರಣಕ್ಕಾಗಿ ರಾಷ್ಟ್ರೀಯ ಕಾರ್ಯಕ್ರಮ (NPCB&VI)"
      },
      icon: <Eye className="h-6 w-6" />,
      website: "https://npcbvi.mohfw.gov.in/",
      launched: "1976",
      ministry: {
        en: "Ministry of Health & Family Welfare",
        kn: "ಆರೋಗ್ಯ ಮತ್ತು ಕುಟುಂಬ ಕಲ್ಯಾಣ ಸಚಿವಾಲಯ"
      },
      description: {
        en: "Prevention and control of blindness and visual impairment",
        kn: "ಕುರುಡುತನ ಮತ್ತು ದೃಷ್ಟಿ ದೌರ್ಬಲ್ಯದ ತಡೆಗಟ್ಟುವಿಕೆ ಮತ್ತು ನಿಯಂತ್ರಣ"
      },
      eligibility: {
        en: ["All age groups", "BPL families", "School children", "Elderly population"],
        kn: ["ಎಲ್ಲಾ ವಯೋಮಾನದವರು", "BPL ಕುಟುಂಬಗಳು", "ಶಾಲಾ ಮಕ್ಕಳು", "ವೃದ್ಧ ಜನಸಂಖ್ಯೆ"]
      },
      benefits: {
        en: ["Free eye checkups", "Cataract surgery", "Spectacles distribution", "Low vision aids"],
        kn: ["ಉಚಿತ ಕಣ್ಣಿನ ಪರೀಕ್ಷೆಗಳು", "ಕಣ್ಣಿನ ಪೊರೆ ಶಸ್ತ್ರಚಿಕಿತ್ಸೆ", "ಕನ್ನಡಕ ವಿತರಣೆ", "ಕಡಿಮೆ ದೃಷ್ಟಿ ಸಾಧನಗಳು"]
      },
      howToApply: {
        en: ["Visit eye camps", "District hospitals", "Primary health centers", "Contact ASHA workers"],
        kn: ["ಕಣ್ಣಿನ ಶಿಬಿರಗಳಿಗೆ ಭೇಟಿ ನೀಡಿ", "ಜಿಲ್ಲಾ ಆಸ್ಪತ್ರೆಗಳು", "ಪ್ರಾಥಮಿಕ ಆರೋಗ್ಯ ಕೇಂದ್ರಗಳು", "ಆಶಾ ಕಾರ್ಯಕರ್ತರನ್ನು ಸಂಪರ್ಕಿಸಿ"]
      },
      contact: {
        en: "Website: npcbvi.mohfw.gov.in | State Blindness Control Society",
        kn: "ವೆಬ್‌ಸೈಟ್: npcbvi.mohfw.gov.in | ರಾಜ್ಯ ಕುರುಡುತನ ನಿಯಂತ್ರಣ ಸಮಿತಿ"
      }
    }
  ];

  const currentText = text[language as keyof typeof text] || text.en;

  return (
    <div className="space-y-4">
      {/* Header */}
      <Card className="bg-gradient-to-r from-green-50 to-blue-50 border-green-200">
        <CardHeader className="pb-3">
          <CardTitle className="text-lg text-green-800 flex items-center gap-2">
            <Shield className="h-5 w-5" />
            {currentText.title}
          </CardTitle>
          <p className="text-sm text-green-600">{currentText.subtitle}</p>
        </CardHeader>
      </Card>

      {/* Schemes Grid */}
      <div className="grid grid-cols-1 gap-4">
        {schemes.map((scheme) => (
          <Card key={scheme.id} className="border-gray-200 hover:border-blue-300 transition-colors duration-200">
            <CardContent className="p-4">
              <div className="flex items-start justify-between">
                <div className="flex items-start gap-3 flex-1">
                  <div className="p-2 bg-blue-50 rounded-lg">
                    {scheme.icon}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-medium text-gray-900 mb-1">
                      {scheme.name[language as keyof typeof scheme.name]}
                    </h3>
                    <p className="text-sm text-gray-600 mb-2">
                      {scheme.description[language as keyof typeof scheme.description]}
                    </p>
                    <div className="flex items-center gap-2 mb-3">
                      <Badge variant="secondary" className="text-xs">
                        {currentText.launched}: {scheme.launched}
                      </Badge>
                      <Badge variant="outline" className="text-xs">
                        {scheme.ministry[language as keyof typeof scheme.ministry]}
                      </Badge>
                    </div>
                  </div>
                </div>
                
                <div className="flex flex-col gap-2 ml-2">
                  <Dialog>
                    <DialogTrigger asChild>
                      <Button size="sm" variant="outline" className="h-8 px-3 text-xs">
                        <Info className="h-3 w-3 mr-1" />
                        {currentText.viewDetails}
                      </Button>
                    </DialogTrigger>
                    <DialogContent className="max-w-2xl max-h-[90vh] overflow-y-auto">
                      <DialogHeader>
                        <DialogTitle className="flex items-center gap-2">
                          {scheme.icon}
                          {scheme.name[language as keyof typeof scheme.name]}
                        </DialogTitle>
                      </DialogHeader>
                      
                      <div className="space-y-6">
                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Users className="h-4 w-4" />
                            {currentText.eligibility}
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {scheme.eligibility[language as keyof typeof scheme.eligibility].map((item, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <ChevronRight className="h-3 w-3" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Heart className="h-4 w-4" />
                            {currentText.benefits}
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {scheme.benefits[language as keyof typeof scheme.benefits].map((item, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <ChevronRight className="h-3 w-3" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2 flex items-center gap-2">
                            <Activity className="h-4 w-4" />
                            {currentText.howToApply}
                          </h4>
                          <ul className="text-sm text-gray-600 space-y-1">
                            {scheme.howToApply[language as keyof typeof scheme.howToApply].map((item, index) => (
                              <li key={index} className="flex items-center gap-2">
                                <ChevronRight className="h-3 w-3" />
                                {item}
                              </li>
                            ))}
                          </ul>
                        </div>

                        <div>
                          <h4 className="font-semibold text-gray-900 mb-2">
                            {currentText.contact}
                          </h4>
                          <p className="text-sm text-gray-600">
                            {scheme.contact[language as keyof typeof scheme.contact]}
                          </p>
                        </div>
                      </div>
                    </DialogContent>
                  </Dialog>
                  
                  <Button 
                    size="sm" 
                    className="h-8 px-3 text-xs"
                    onClick={() => window.open(scheme.website, '_blank')}
                  >
                    <Globe className="h-3 w-3 mr-1" />
                    {currentText.visitWebsite}
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </div>
  );
};

export default GovernmentHealthSchemes;