#See https://aka.ms/containerfastmode to understand how Visual Studio uses this Dockerfile to build your images for faster debugging.

FROM mcr.microsoft.com/dotnet/core/aspnet:3.1-buster-slim AS base
RUN apt-get update && apt-get install -y libgdiplus
WORKDIR /app
EXPOSE 80
ENV ASPNETCORE_URLS=http://*:80
#EXPOSE 443

FROM mcr.microsoft.com/dotnet/core/sdk:3.1-buster AS build
WORKDIR /src
COPY ["K_Api202001/K_Api202001.csproj", "K_Api202001/"]
RUN dotnet restore "K_Api202001/K_Api202001.csproj"
COPY . .
WORKDIR "/src/K_Api202001"
RUN dotnet build "K_Api202001.csproj" -c Release -o /app/build

FROM build AS publish
RUN dotnet publish "K_Api202001.csproj" -c Release -o /app/publish

FROM base AS final
WORKDIR /app
COPY --from=publish /app/publish .
ENTRYPOINT ["dotnet", "K_Api202001.dll"]