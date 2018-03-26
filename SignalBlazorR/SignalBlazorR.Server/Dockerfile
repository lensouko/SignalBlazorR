FROM microsoft/aspnetcore:2.1 AS base
WORKDIR /app
EXPOSE 80

FROM microsoft/aspnetcore-build:2.1 AS build
WORKDIR /src
COPY SignalBlazorR.sln ./
COPY SignalBlazorR/SignalBlazorR.Server/SignalBlazorR.Server.csproj SignalBlazorR/SignalBlazorR.Server/
COPY SignalBlazorR/SignalBlazorR.Shared/SignalBlazorR.Shared.csproj SignalBlazorR/SignalBlazorR.Shared/
COPY SignalBlazorR/SignalBlazorR.Client/SignalBlazorR.Client.csproj SignalBlazorR/SignalBlazorR.Client/
RUN dotnet restore -nowarn:msb3202,nu1503
COPY . .
WORKDIR /src/SignalBlazorR/SignalBlazorR.Server
RUN dotnet build SignalBlazorR.Server.csproj -c Release -o /app

FROM build AS publish
RUN dotnet publish SignalBlazorR.Server.csproj -c Release -o /app

FROM base AS final
WORKDIR /app
COPY --from=publish /app .
ENTRYPOINT ["dotnet", "SignalBlazorR.Server.dll"]
