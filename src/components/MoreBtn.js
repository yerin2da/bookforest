import React from "react";

export default function MoreBtn({ onClick = null, disabled = false, isLoading = false, className = '' }) {
    return (
        <div className="flex justify-center pt-4">
            <button
                onClick={onClick}
                disabled={disabled}
                className={`px-4 py-2.5 bg-gray-800 text-white rounded text-sm ${className} ${disabled ? 'opacity-50 cursor-not-allowed' : ''}`}
            >
                {isLoading ? "불러오는 중..." : "더보기"}
            </button>
        </div>
    );
}
