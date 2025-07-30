import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Progress } from "@/components/ui/progress";
import { 
  Heart, 
  Activity, 
  Calendar, 
  Pill, 
  TrendingUp, 
  Clock,
  Target,
  Droplets,
  Thermometer,
  Weight
} from "lucide-react";

interface HealthDashboardProps {
  language: string;
}

const HealthDashboard = ({ language }: HealthDashboardProps) => {
  const text = {
    en: {
      dashboard: "Health Dashboard",
      welcome: "Welcome back!",
      healthScore: "Health Score",
      excellent: "Excellent",
      vitals: "Today's Vitals",
      heartRate: "Heart Rate",
      bloodPressure: "Blood Pressure",
      temperature: "Temperature",
      weight: "Weight",
      waterIntake: "Water Intake",
      todaysGoal: "Today's Goal",
      appointments: "Upcoming Appointments",
      medications: "Medications",
      takeMedicine: "Take Medicine",
      healthTips: "Health Tips",
      drinkWater: "Stay hydrated - drink 8 glasses of water daily",
      exercise: "Get 30 minutes of exercise daily",
      sleep: "Maintain 7-8 hours of sleep",
      achievements: "Achievements",
      weeklyGoal: "Weekly Goal",
      completed: "Completed"
    },
    kn: {
      dashboard: "ಆರೋಗ್ಯ ಡ್ಯಾಶ್‌ಬೋರ್ಡ್",
      welcome: "ಮತ್ತೆ ಸ್ವಾಗತ!",
      healthScore: "ಆರೋಗ್ಯ ಸ್ಕೋರ್",
      excellent: "ಅತ್ಯುತ್ತಮ",
      vitals: "ಇಂದಿನ ಮೂಲಭೂತ ಅಂಶಗಳು",
      heartRate: "ಹೃದಯ ಬಡಿತ",
      bloodPressure: "ರಕ್ತದೊತ್ತಡ",
      temperature: "ತಾಪಮಾನ",
      weight: "ತೂಕ",
      waterIntake: "ನೀರಿನ ಸೇವನೆ",
      todaysGoal: "ಇಂದಿನ ಗುರಿ",
      appointments: "ಮುಂಬರುವ ಅಪಾಯಿಂಟ್‌ಮೆಂಟ್‌ಗಳು",
      medications: "ಔಷಧಿಗಳು",
      takeMedicine: "ಔಷಧಿ ತೆಗೆದುಕೊಳ್ಳಿ",
      healthTips: "ಆರೋಗ್ಯ ಸಲಹೆಗಳು",
      drinkWater: "ಹೈಡ್ರೇಟೆಡ್ ಆಗಿರಿ - ದಿನಕ್ಕೆ 8 ಗ್ಲಾಸ್ ನೀರು ಕುಡಿಯಿರಿ",
      exercise: "ದಿನಕ್ಕೆ 30 ನಿಮಿಷಗಳ ವ್ಯಾಯಾಮ ಮಾಡಿ",
      sleep: "7-8 ಗಂಟೆಗಳ ನಿದ್ರೆಯನ್ನು ಕಾಪಾಡಿ",
      achievements: "ಸಾಧನೆಗಳು",
      weeklyGoal: "ಸಾಪ್ತಾಹಿಕ ಗುರಿ",
      completed: "ಪೂರ್ಣಗೊಂಡಿದೆ"
    }
  };

  const currentText = text[language as keyof typeof text];

  return (
    <div className="space-y-8 animate-fade-in">
      {/* Welcome Header */}
      <div className="text-center space-y-2">
        <h1 className="text-3xl font-bold text-gradient">{currentText.dashboard}</h1>
        <p className="text-lg text-muted-foreground">{currentText.welcome}</p>
      </div>

      {/* Health Score Card */}
      <Card className="card-interactive border-0 shadow-elegant hover:shadow-glow">
        <CardHeader className="text-center pb-4">
          <CardTitle className="flex items-center justify-center gap-3">
            <div className="h-12 w-12 bg-gradient-to-br from-success to-primary rounded-xl flex items-center justify-center animate-warm-glow">
              <Heart className="h-6 w-6 text-white" />
            </div>
            <span className="text-xl">{currentText.healthScore}</span>
          </CardTitle>
        </CardHeader>
        <CardContent className="text-center">
          <div className="text-5xl font-bold text-gradient mb-2">92</div>
          <Badge variant="secondary" className="bg-success/20 text-success hover:bg-success/30">
            {currentText.excellent}
          </Badge>
          <Progress value={92} className="mt-4 h-3 bg-secondary" />
        </CardContent>
      </Card>

      {/* Vitals Grid */}
      <div>
        <h2 className="text-xl font-semibold mb-4 flex items-center gap-2">
          <Activity className="h-5 w-5 text-primary" />
          {currentText.vitals}
        </h2>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Card className="card-interactive stagger-1">
            <CardContent className="p-4 text-center">
              <Heart className="h-8 w-8 text-destructive mx-auto mb-2" />
              <div className="text-2xl font-bold">72</div>
              <div className="text-sm text-muted-foreground">{currentText.heartRate}</div>
            </CardContent>
          </Card>
          
          <Card className="card-interactive stagger-2">
            <CardContent className="p-4 text-center">
              <TrendingUp className="h-8 w-8 text-primary mx-auto mb-2" />
              <div className="text-2xl font-bold">120/80</div>
              <div className="text-sm text-muted-foreground">{currentText.bloodPressure}</div>
            </CardContent>
          </Card>
          
          <Card className="card-interactive stagger-3">
            <CardContent className="p-4 text-center">
              <Thermometer className="h-8 w-8 text-warning mx-auto mb-2" />
              <div className="text-2xl font-bold">98.6°F</div>
              <div className="text-sm text-muted-foreground">{currentText.temperature}</div>
            </CardContent>
          </Card>
          
          <Card className="card-interactive stagger-4">
            <CardContent className="p-4 text-center">
              <Weight className="h-8 w-8 text-accent mx-auto mb-2" />
              <div className="text-2xl font-bold">68kg</div>
              <div className="text-sm text-muted-foreground">{currentText.weight}</div>
            </CardContent>
          </Card>
        </div>
      </div>

      {/* Daily Goals */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Water Intake */}
        <Card className="card-interactive">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Droplets className="h-5 w-5 text-primary" />
              {currentText.waterIntake}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{currentText.todaysGoal}</span>
              <span className="text-sm font-medium">6/8 glasses</span>
            </div>
            <Progress value={75} className="h-3 bg-secondary" />
          </CardContent>
        </Card>

        {/* Weekly Achievement */}
        <Card className="card-interactive">
          <CardHeader>
            <CardTitle className="flex items-center gap-2">
              <Target className="h-5 w-5 text-accent" />
              {currentText.achievements}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="flex items-center justify-between mb-2">
              <span className="text-sm text-muted-foreground">{currentText.weeklyGoal}</span>
              <span className="text-sm font-medium">5/7 days</span>
            </div>
            <Progress value={71} className="h-3 bg-secondary" />
          </CardContent>
        </Card>
      </div>

      {/* Quick Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Appointments */}
        <Card className="card-interactive hover:shadow-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Calendar className="h-5 w-5 text-primary" />
              {currentText.appointments}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center gap-3 p-2 bg-secondary/50 rounded-lg">
                <Clock className="h-4 w-4 text-muted-foreground" />
                <div>
                  <div className="font-medium text-sm">Dr. Smith</div>
                  <div className="text-xs text-muted-foreground">Tomorrow, 2:00 PM</div>
                </div>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Medications */}
        <Card className="card-interactive hover:shadow-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Pill className="h-5 w-5 text-warning" />
              {currentText.medications}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-3">
              <div className="flex items-center justify-between p-2 bg-warning/10 rounded-lg">
                <div>
                  <div className="font-medium text-sm">Vitamin D</div>
                  <div className="text-xs text-muted-foreground">8:00 AM</div>
                </div>
                <Badge variant="outline" className="text-xs">
                  {currentText.takeMedicine}
                </Badge>
              </div>
            </div>
          </CardContent>
        </Card>

        {/* Health Tips */}
        <Card className="card-interactive hover:shadow-glow">
          <CardHeader>
            <CardTitle className="flex items-center gap-2 text-lg">
              <Heart className="h-5 w-5 text-success" />
              {currentText.healthTips}
            </CardTitle>
          </CardHeader>
          <CardContent>
            <div className="space-y-2 text-sm">
              <div className="p-2 bg-success/10 rounded-lg">
                💧 {currentText.drinkWater}
              </div>
              <div className="p-2 bg-primary/10 rounded-lg">
                🏃 {currentText.exercise}
              </div>
              <div className="p-2 bg-accent/10 rounded-lg">
                😴 {currentText.sleep}
              </div>
            </div>
          </CardContent>
        </Card>
      </div>
    </div>
  );
};

export default HealthDashboard;