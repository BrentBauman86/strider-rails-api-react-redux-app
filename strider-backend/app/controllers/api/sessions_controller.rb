class Api::SessionsController < ApplicationController

    def create
        @user = User.find_by(username: params[:session][:username])

        if @user && @user.authenticate(params[:session][:password])
            session[:user_id] = @user.user_id
            render json: @user 
        else 
            render json: {
                error: "Invalid Credentials"
            }
        end
    end
end
