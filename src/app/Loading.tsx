function Loading() {
	return (
		<div className="flex items-center justify-center h-screen">
			<div className="animate-spin rounded-full h-32 w-32 border-b-2 border-blue-500 flex items-center justify-center">
				<span className="sr-only">Loading...</span>
			</div>
		</div>
	);
}
export default Loading;
