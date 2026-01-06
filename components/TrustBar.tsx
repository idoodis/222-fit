import { Star, Award, MapPin } from "lucide-react";

export function TrustBar() {
  return (
    <div className="mt-12 border-t border-border/50 pt-8">
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
          <div className="flex-shrink-0">
            <Star className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">5-Star Client Reviews</p>
            <p className="text-xs text-muted-foreground">Trusted by clients</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
          <div className="flex-shrink-0">
            <Award className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">8+ Years Experience</p>
            <p className="text-xs text-muted-foreground">Proven track record</p>
          </div>
        </div>
        <div className="flex flex-col items-center gap-2 text-center sm:flex-row sm:text-left">
          <div className="flex-shrink-0">
            <MapPin className="h-6 w-6 text-primary" />
          </div>
          <div>
            <p className="text-sm font-semibold text-foreground">Serving Carol Stream & Nearby Areas</p>
            <p className="text-xs text-muted-foreground">Local expertise</p>
          </div>
        </div>
      </div>
    </div>
  );
}

