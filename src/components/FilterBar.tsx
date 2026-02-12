import { Search } from "lucide-react";
import { Input } from "@/components/ui/Input";
import { Select } from "@/components/ui/Select";

interface FilterBarProps {
  search: string;
  setSearch: (value: string) => void;
  sport: string;
  setSport: (value: string) => void;
  availableSports: string[];
}

export function FilterBar({
  search,
  setSearch,
  sport,
  setSport,
  availableSports,
}: FilterBarProps) {
  return (
    <div className="flex flex-col md:flex-row gap-4 mb-8">
      {/* Reusable Input with Icon */}
      <div className="flex-1">
        <Input 
          placeholder="Search leagues..." 
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          icon={<Search className="h-4 w-4" />}
        />
      </div>

      {/* Reusable Select */}
      <div className="w-full md:w-64">
        <Select 
          value={sport} 
          onChange={(e) => setSport(e.target.value)}
        >
          <option value="">All Sports</option>
          {availableSports.map((s) => (
            <option key={s} value={s}>
              {s}
            </option>
          ))}
        </Select>
      </div>
    </div>
  );
}