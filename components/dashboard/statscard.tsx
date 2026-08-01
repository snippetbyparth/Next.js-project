interface StatsCardProps {
    title: string;
    value: number;
}

export default function StatsCard({ title, value }: StatsCardProps) {
    return (
        <div className="bg-gray-800 p-2 m-1.5 rounded-lg">
            <h2 className="text-white text-lg font-semibold">{title}</h2>
            <p className="text-white text-2xl">{value}</p>
        </div>
    )
}
